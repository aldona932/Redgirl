# Red Flag Detector Chat Analyzer 🎯

## Basic Details
* **Team Name:red girl
* **Team Members**
  * Member 1: aldona932 - st.Joseph's college (Autonomous ), Devagiri
    


## Hosted Project Link
https://github.com/aldona932/Redgirl.git

## Project Description
A full-stack web application designed to analyze pasted chat histories or text documents to detect toxic language, negative sentiments, and manipulative/gaslighting phrases using rule-based Natural Language Processing.

## The Problem statement
Identifying toxic, manipulative, and gaslighting behavior in text conversations can often be difficult or subtle, leaving individuals vulnerable to emotional manipulation and abusive language without realizing it.

## The Solution
A rule-based NLP web application that analyzes user-provided chat text to scan for specific keywords and phrases associated with toxicity, negative sentiment, and manipulation. It provides a visual dashboard with interactive text highlights, an overall risk score, and customized safety advice.

## Technical Details
### Technologies/Components Used
**For Software:**
* **Languages used:** JavaScript, HTML, CSS, Node.js
* **Frameworks used:** Express.js
* **Libraries used:** `cors`, `helmet`
* **Tools used:** VS Code, Git

**For Hardware:**
* **Main components:** N/A
* **Specifications:** N/A
* **Tools required:** N/A

## Features
* **Feature 1:** Toxicity Detection - Scans and flags aggressive or toxic language using keyword dictionaries.
* **Feature 2:** Manipulation Analysis - Identifies common gaslighting and manipulative phrases within text.
* **Feature 3:** Sentiment Scoring - Gauges overall tone by counting positive and negative words.
* **Feature 4:** Interactive Visual Dangers - Safely rendered interactive UI highlights showing exact locations of red flags inside your chat.

## Implementation
### For Software:
**Installation**
```bash
npm install
```

**Run**
```bash
node server/server.js
```

### For Hardware:
**Components Required**
* N/A

**Circuit Setup**
* N/A

## Project Documentation
### For Software:

**Screenshots (Add at least 3)**
![Screenshot1](Add screenshot 1 here with proper name) Dashboard Overview

![Screenshot2](Add screenshot 2 here with proper name) Flag Breakdown

![Screenshot3](Add screenshot 3 here with proper name) Sentiment & Safety Advice

**Diagrams**
* **System Architecture:**
*(Add Architecture Diagram Here)*
A standard Client-Server architecture. The Client (HTML/JS/CSS) captures chat text and sends it to the Server (Node.js/Express) via API. The Server invokes independent NLP modules (toxicity, manipulation, sentiment) and aggregates a risk score before responding with a JSON payload to update the DOM.

* **Application Workflow:**
*(Add Workflow Here)*
User uploads text -> Client performs API Fetch -> Node.js server sanitizes input -> Text passed sequentially through rule-based matching dictionaries -> Risk aggregate calculated -> Response JSON fetched by Client -> UI circles, stats, and safe innerHTML text replacements rendered.

### For Hardware:
**Schematic & Circuit**
* N/A

**Build Photos**
* N/A

## Additional Documentation
### For Web Projects with Backend:
**API Documentation**
* **Base URL:** `http://localhost:3000` (or your hosted domain)

**Endpoints**
**POST /api/analyze**
* **Description:** Analyzes a block of text for red flags.
* **Request Body:**
  ```json
  {
    "text": "Your chat text goes here."
  }
  ```
* **Response:**
  ```json
  {
    "riskScore": 35,
    "flags": [
      {
        "phrase": "You are stupid.",
        "match": "stupid",
        "type": "toxicity",
        "description": "Found toxic or aggressive language"
      }
    ],
    "categories": {"toxicity": 1, "manipulation": 0, "negativeSentiment": 1},
    "suggestions": ["Toxic language was detected."],
    "sentiment": "negative"
  }
  ```

### For Mobile Apps:
**App Flow Diagram**
* N/A

**Installation Guide**
* N/A

### For Hardware Projects:
**Bill of Materials (BOM)**
* N/A
