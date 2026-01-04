import fetch from "node-fetch";

const API_KEY = process.env.GEMINI_API_KEY;

export async function askGemini(prompt) {
  const url =
    "https://generativeai.googleapis.com/v1/models/gemini-1.5-flash:generateContent";

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-goog-api-key": API_KEY,
    },
    body: JSON.stringify({
      contents: [
        {
          role: "user",
          parts: [{ text: prompt }],
        },
      ],
    }),
  });

  const data = await res.json();

  console.log("🟢 Gemini raw response:", JSON.stringify(data, null, 2));

  if (!data.candidates?.length) {
    throw new Error("Empty Gemini response");
  }

  return data.candidates[0].content.parts[0].text;
}
