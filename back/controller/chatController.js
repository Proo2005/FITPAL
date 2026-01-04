import { askGemini } from "../lib/gemini.js";

export const chatWithGemini = async (req, res) => {
  try {
    const { query } = req.body;

    if (!query) {
      return res.status(400).json({ error: "Query is required" });
    }

    const answer = await askGemini(
      `You are a fitness assistant. Answer clearly and safely.\n\nUser: ${query}`
    );

    res.json({ answer });
  } catch (error) {
    console.error("❌ Gemini Error:", error.message);
    res.status(500).json({
      answer: "I couldn’t generate a response. Please try again.",
    });
  }
};
