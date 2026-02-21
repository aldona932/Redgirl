# Red Flag Detector | Chat Analyzer

A full-stack web application designed to analyze pasted chat histories or text documents to detect toxic language, negative sentiments, and manipulative/gaslighting phrases using rule-based Natural Language Processing.

## Features
- **Frontend Dashboard:** Modern dark-mode UI with dynamic SVG score charts, file uploading, and highlighted text capabilities.
- **Modular NLP Engine:** Separated logic for toxicity, sentiment, manipulation, and scoring.
- **Live Highlight Rendering:** Safely parses text and visually highlights offending phrases with interactive tooltips.
- **Security:** Built with input sanitization, Helmet, and CORS middleware.

## Project Structure
```
├── client/                 # Frontend assets
│   ├── index.html          # Core layout
│   ├── css/styles.css      # Custom styling & animations
│   └── js/
│       ├── app.js          # Client controller
│       ├── api.js          # Fetch abstraction
│       └── ui.js           # UI rendering library
├── server/                 # Node.js Backend
│   ├── server.js           # Entry point
│   ├── routes/             # API routes
│   ├── middleware/         # Security functions
│   ├── controllers/        # Request handling
│   ├── modules/            # NLP logic (toxicity, sentiment, etc.)
│   └── utils/              # Helper functions (textParser)
└── package.json
```

## Setup & Running Locally

1. **Install Dependencies**
   Make sure you have Node.js installed, then run:
   ```bash
   npm install
   ```

2. **Start the Server**
   ```bash
   node server/server.js
   ```

3. **Access the App**
   Open your browser and navigate to:
   `http://localhost:3000`

## Usage
Simply hover or click over the textarea, paste in a raw chat snippet, or upload a `.txt` file using the button. Click **Analyze Chat** to instantly get a risk score, category breakdown, sentiment evaluation, and actionable safety advice.
