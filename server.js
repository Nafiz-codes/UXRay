const express = require("express");
const dotenv = require("dotenv");
const { OpenAI } = require("openai");

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.static("public"));

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.get("/test", async (req, res) => {
  try {
    const response = await client.responses.create({
      model: "gpt-5-mini",
      input: "Say hello from UXRay",
    });

    res.send(response.output_text);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});
app.post("/api/heal", async (req, res) => {
  try {

    const { html, instruction } = req.body;

    const response = await client.responses.create({
      model: "gpt-5-mini",
      input: `
You are UXRay.

Analyze and improve this HTML.

Instruction:
${instruction}

Requirements:
- Improve spacing
- Improve accessibility
- Improve visual hierarchy
- Improve button styling
- Return ONLY HTML
- No markdown

HTML:

${html}
      `
    });

    res.json({
      healedHtml: response.output_text
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: error.message
    });
  }
});
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});