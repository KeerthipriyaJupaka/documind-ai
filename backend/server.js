const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend Running 🚀");
});

app.post("/generate", async (req, res) => {
  try {
    const { repo } = req.body;

    console.log("Generate route called");

    // Simulated AI response
    const documentation = `
# Technical Documentation

## Repository
${repo}

---

## Project Overview
This project is an AI-powered web application designed to automate technical documentation generation for developers.

---

## Features
- Automated README generation
- API documentation
- Pull request summarization
- Deployment notes generation
- AI-based documentation assistant

---

## Installation

\`\`\`bash
npm install
\`\`\`

---

## Usage

\`\`\`bash
npm run dev
\`\`\`

---

## API Documentation

### POST /generate

Generates technical documentation from repository input.

---

## Folder Structure

\`\`\`
frontend/
backend/
\`\`\`

---

## Future Improvements
- GitHub OAuth
- Real repository parsing
- Swagger integration
- CI/CD automation
`;

    // Fake delay for AI feel
    setTimeout(() => {
      res.json({
        documentation,
      });
    }, 2000);

  } catch (error) {
    console.log(error);

    res.status(500).json({
      error: "Failed to generate docs",
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});