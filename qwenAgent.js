// qwenAgent.js
const OpenAI = require("openai");
require("dotenv").config();

const client = new OpenAI({
    apiKey: process.env.QWEN_API_KEY,
    baseURL: "https://dashscope-intl.aliyuncs.com/compatible-mode/v1", // Crucial for QwenCloud
});

// 1. Define the Tools (Functions) the AI can use
const tools = [
    {
        type: "function",
        function: {
            name: "get_market_price",
            description: "Get the current market price of a crop in Kampala",
            parameters: {
                type: "object",
                properties: {
                    crop: { type: "string", description: "The name of the crop, e.g., Maize, Beans" },
                },
                required: ["crop"],
            },
        },
    },
    {
        type: "function",
        function: {
            name: "find_buyers",
            description: "Find active buyers for a specific crop",
            parameters: {
                type: "object",
                properties: {
                    crop: { type: "string" },
                    volume_kg: { type: "number", description: "Approximate weight in KG" }
                },
                required: ["crop"],
            },
        },
    }
];

// 2. Mock Local Database (In production, this queries your Alibaba Cloud RDS)
function executeLocalFunction(name, args) {
    if (name === "get_market_price") {
        const prices = { "beans": 3200, "maize": 1500, "coffee": 8500 };
        return JSON.stringify({ price_ugx: prices[args.crop.toLowerCase()] || 1000, currency: "UGX/kg" });
    }
    if (name === "find_buyers") {
        return JSON.stringify([
            { id: "B1", name: "Buyer A (Owino Market)", offer: 3100 },
            { id: "B2", name: "Buyer B (Nakaseke)", offer: 3150 }
        ]);
    }
    return "{}";
}

// 3. The Autopilot Loop
async function runAgent(userInput) {
    const messages = [
        { role: "system", content: "You are SokoAgent AI, an expert agricultural broker for Ugandan farmers. Keep responses under 140 characters for USSD screens. Always use your tools to get data." },
        { role: "user", content: userInput }
    ];

    let response = await client.chat.completions.create({
        model: "qwen-max", // Or qwen-plus
        messages: messages,
        tools: tools,
        tool_choice: "auto",
    });

    let responseMessage = response.choices[0].message;

    // Check if the AI wants to call a tool
    if (responseMessage.tool_calls) {
        messages.push(responseMessage); // Append AI's request

        // Execute ALL requested tools
        for (const toolCall of responseMessage.tool_calls) {
            const functionName = toolCall.function.name;
            const functionArgs = JSON.parse(toolCall.function.arguments);
            
            console.log(`[AUTO-PILOT] Executing tool: ${functionName} with args:`, functionArgs);
            const functionResponse = executeLocalFunction(functionName, functionArgs);

            // Append the tool's result back to the conversation
            messages.push({
                tool_call_id: toolCall.id,
                role: "tool",
                name: functionName,
                content: functionResponse,
            });
        }

        // Call Qwen AGAIN with the tool results to get the final text
        const finalResponse = await client.chat.completions.create({
            model: "qwen-max",
            messages: messages,
        });
        
        return finalResponse.choices[0].message.content;
    }

    return responseMessage.content;
}

module.exports = { runAgent };