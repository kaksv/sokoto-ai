# SokoAgent AI 🤖🌾

**AI-Powered Market Access for Ugandan Smallholder Farmers**

SokoAgent AI eliminates middleman exploitation by connecting smallholder farmers directly to fair markets through a simple USSD interface — no smartphone required. Just dial `*347*1#`, get AI-powered price insights, and sell at fair value.

Built for the **QwenCloud Global AI Hackathon 2026**.

---

## 🚀 Features

- **USSD Interface** — Works on any phone, no internet needed. Dial `*347*1#` to start.
- **AI-Powered Pricing** — QwenCloud AI analyzes market data to provide fair, real-time crop prices.
- **Buyer Matching** — Automatically connects farmers with verified buyers offering competitive rates.
- **Multilingual Support** — English, Luganda, and Runyankore.
- **Mobile Money Integration** — Receive payments directly to your mobile money account.
- **Price Alerts** — Get notified when crop prices hit your target.

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────┐
│            User Layer (Any Phone)            │
│         USSD *347*1#  │  SMS Gateway         │
└─────────────────┬───────────────────────────┘
                  │
┌─────────────────▼───────────────────────────┐
│       Communication Layer (Africa's Talking) │
│   USSD Session Manager │ SMS │ Mobile Money  │
└─────────────────┬───────────────────────────┘
                  │
┌─────────────────▼───────────────────────────┐
│       Application Layer (Node.js + Express)  │
│   REST API │ Session State Machine │ Cache   │
└─────────────────┬───────────────────────────┘
                  │
┌─────────────────▼───────────────────────────┐
│       AI & Data Layer (QwenCloud)            │
│   NLU │ Price Prediction │ Buyer Matching    │
└─────────────────────────────────────────────┘
```

### Request Flow

1. **Farmer dials** `*347*1#` on any phone
2. **Africa's Talking** routes the USSD request to our backend
3. **Express server** processes the session and determines intent
4. **QwenCloud AI** analyzes the request, calls tools (market prices, buyer lookup)
5. **Market data** is returned and formatted for USSD
6. **Response** is sent back to the farmer's phone via USSD

---

## 📁 Project Structure

```
soko-agent-ai/
├── index.js              # Express server with USSD webhook endpoint
├── qwenAgent.js          # QwenCloud AI agent with function calling
├── package.json          # Backend dependencies
├── .env.example          # Environment variables template
├── .gitignore
├── README.md
└── frontend/
    ├── index.html
    ├── vite.config.js
    ├── package.json
    └── src/
        ├── main.jsx
        ├── App.jsx
        ├── index.css
        └── components/
            ├── Navbar.jsx        # Fixed navigation with scroll blur
            ├── Hero.jsx          # Landing section with phone mockup
            ├── USSDGuide.jsx     # Interactive 5-step USSD walkthrough
            ├── Architecture.jsx  # Technical architecture visualization
            └── Footer.jsx        # Footer with links and branding
```

---

## 🛠️ Tech Stack

### Backend
| Technology | Purpose |
|------------|---------|
| **Node.js + Express** | REST API server (Render-hosted) |
| **QwenCloud AI API** | Natural language understanding & function calling |
| **Africa's Talking** | USSD gateway, SMS, and Mobile Money API |
| **OpenAI SDK** | QwenCloud-compatible API client |

### Frontend
| Technology | Purpose |
|------------|---------|
| **React 18 + Vite** | Frontend framework & build tool |
| **Tailwind CSS v3** | Utility-first styling |
| **Framer Motion** | Animations & transitions |
| **Lucide React** | Icon library |
| **React Router DOM v6** | Client-side routing |

---

## 🚦 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- A [QwenCloud](https://dashscope-intl.aliyuncs.com) API key
- An [Africa's Talking](https://africastalking.com) account (for USSD)

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/kaksv/sokoto-ai.git
   cd soko-agent-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and add your QwenCloud API key:
   ```
   QWEN_API_KEY=your_qwencloud_api_key_here
   PORT=3000
   ```

4. **Start the server**
   ```bash
   node index.js
   ```
   The server starts on `http://localhost:3000`.

### Frontend Setup

1. **Navigate to the frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   Opens at `http://localhost:5173`.

4. **Build for production**
   ```bash
   npm run build
   ```
   Output is in the `dist/` directory, ready for deployment to Render (static site).

---

## 📡 API Endpoints

### `POST /ussd`
Africa's Talking USSD webhook endpoint.

**Request body** (URL-encoded):
```
phoneNumber=+2567XXXXXXXX
serviceCode=*347*1#
text=
```

**Response** (plain text):
```
CON Welcome to SokoAgent AI!
1. Sell Produce
2. Check Market Prices
3. My USDT Wallet
```

---

## 🤖 AI Agent Capabilities

The QwenCloud-powered agent (`qwenAgent.js`) uses function calling to:

1. **`get_market_price(crop)`** — Returns current market price for a crop in UGX/kg
2. **`find_buyers(crop, volume_kg)`** — Finds active buyers with their offers

The agent runs an autopilot loop:
1. Receives farmer's natural language input (e.g., "Beans 5 bags")
2. Determines which tools to call
3. Executes the tools against mock/local data
4. Generates a concise USSD-friendly response (< 140 characters)

---

## 🌍 Deployment

### Backend (Render Web Service)
1. Push to GitHub
2. Create a new **Web Service** on Render
3. Connect your repository
4. Set the build command: `npm install`
5. Set the start command: `node index.js`
6. Add environment variables in Render dashboard

### Frontend (Render Static Site)
1. In Render, create a new **Static Site**
2. Connect the same repository
3. Set **Root Directory** to `frontend`
4. Set **Build Command** to `npm install && npm run build`
5. Set **Publish Directory** to `dist`

---

## 📝 License

ISC

---

## 🙏 Acknowledgments

- [QwenCloud](https://dashscope-intl.aliyuncs.com) for the AI API
- [Africa's Talking](https://africastalking.com) for USSD infrastructure
- Ugandan smallholder farmers — the reason we build

---

<p align="center">Made with ❤️ for Ugandan farmers</p>