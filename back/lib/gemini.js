// backend/lib/gemini.js
import fetch from "node-fetch"; // make sure node-fetch is installed
import dotenv from "dotenv";
dotenv.config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  throw new Error("GEMINI_API_KEY missing in .env");
}

const BASE_URL = "https://api.gemini.ai/v1"; // replace with your Gemini API endpoint

const gemini = {
  getAnswer: async (query) => {
    const response = await fetch(`${BASE_URL}/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${GEMINI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gemini-1", // use your model
        input: query,
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Gemini API error: ${text}`);
    }

    const data = await response.json();
    return data.output?.[0]?.content || "Sorry, I could not answer that.";
  },
};

export default gemini;
