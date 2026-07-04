// index.js
const express = require('express');
const bodyParser = require('body-parser');
const { runAgent } = require('./qwenAgent');
require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// In-memory state management (Session Tracker)
const sessions = new Map();

app.post('/ussd', async (req, res) => {
    const { phoneNumber, serviceCode, text } = req.body;

    // Track user session state
    let sessionState = sessions.get(phoneNumber) || { level: 0, data: {} };

    try {
        // LEVEL 0: Initial Dial (Empty text)
        if (text === '') {
            sessionState.level = 1;
            sessions.set(phoneNumber, sessionState);
            
            let response = `CON Welcome to SokoAgent AI!\n`;
            response += `1. Sell Produce\n`;
            response += `2. Check Market Prices\n`;
            response += `3. My USDT Wallet`;
            res.set('Content-Type', 'text/plain');
            res.status(200).send(response);
        }

        // LEVEL 1: User selected "1. Sell Produce"
        else if (text === '1' && sessionState.level === 1) {
            sessionState.level = 2;
            sessions.set(phoneNumber, sessionState);
            
            // EdgeAgent Trick: Keep it extremely short to avoid USSD timeouts
            res.set('Content-Type', 'text/plain');
            res.status(200).send(`CON What are you selling and how much?\n(e.g., "Beans 5 bags")`);
        }

        // LEVEL 2: User typed "Beans 5 bags"
        else if (sessionState.level === 2) {
            sessionState.level = 3;
            sessions.set(phoneNumber, sessionState);

            // Send a "Please wait" message IMMEDIATELY so the USSD session doesn't timeout
            // while the AI is thinking. (Africa's Talking supports async callbacks, but 
            // for a simple hackathon webhook, we block and wait for Qwen).
            
            console.log(`[FARMER INPUT]: ${text}`);
            
            // Trigger the Autopilot Agent
            const aiResponse = await runAgent(text);

            // Format the response for USSD (END means close session)
            res.set('Content-Type', 'text/plain');
            res.status(200).send(`END ${aiResponse}\n\nReply 1 to accept.`);
            
            // Clean up session after completion
            sessions.delete(phoneNumber);
        }
        
        else {
            res.set('Content-Type', 'text/plain');
            res.status(200).send(`END Invalid input. Dial again.`);
            sessions.delete(phoneNumber);
        }

    } catch (error) {
        console.error("Error:", error);
        res.set('Content-Type', 'text/plain');
        res.status(200).send(`END SokoAgent AI encountered an error. Please try again.`);
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`SokoAgent AI listening on port ${PORT}`);
});