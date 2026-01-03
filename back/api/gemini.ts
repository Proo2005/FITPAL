import fetch from "node-fetch";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  throw new Error("GEMINI_API_KEY missing in .env");
}

export async function askGemini(query: string) {
  const response = await fetch("https://api.gemini.com/v1/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${GEMINI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gemini-1.5",
      input: query,
    }),
  });

  const data = await response.json();
  return data.output_text || "Sorry, I couldn't understand that.";
}
