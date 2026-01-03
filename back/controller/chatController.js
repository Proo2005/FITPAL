// backend/controller/chatController.js
import gemini from "../lib/gemini.js"; // your Gemini setup

export const handleChat = async (req, res) => {
  const { query } = req.body;

  if (!query) {
    return res.status(400).json({ error: "Query is required" });
  }

  try {
    // Call Gemini AI (replace with your Gemini API call)
    const answer = await gemini.getAnswer(query); // make sure gemini.js exports getAnswer

    res.json({ answer });
  } catch (err) {
    console.error(err);
    res.status(500).json({ answer: "Sorry, I could not process your request." });
  }
};
