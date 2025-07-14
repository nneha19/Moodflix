export async function getResponse(formData) {
  const { Mood, Genre, Company, Duration, Platform, Freshness } = formData;

const prompt = `Suggest 6 ${Freshness?.toLowerCase()} ${Genre?.toLowerCase()} movies or shows for someone feeling ${Mood?.toLowerCase()} and watching with ${Company?.toLowerCase()}. 
They should be available on ${Platform}, and around ${Duration?.toLowerCase()}.
For each suggestion, return details in **exactly** this format (and do not add anything outside of this structure):

---
**Title:** [Movie Title]  
**Platform:** [Netflix, etc.]  
**Rating:** [PG, etc.]  
**Trailer:** Link to the official YouTube trailer only (avoid unofficial or unavailable links)
**Description:** [1-2 lines about the movie]
---

Return exactly 6 suggestions. Use blank lines between each.`;


  try {
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "https://moodflixx.vercel.app/",
          "X-Title": "MoodFlix",
        },
        body: JSON.stringify({
          model: "meta-llama/llama-3-8b-instruct",
          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],
        }),
      }
    );

    const data = await response.json();

    if (data.error) {
      throw new Error(data.error.message);
    }

    return data.choices[0]?.message?.content || "No response from AI.";
  } catch (err) {
    console.error("❌ AI error:", err.message);
    return "Something went wrong while contacting AI.";
  }
}
