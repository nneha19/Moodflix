import React from "react";
import Empty from "../assets/empty.svg";
import Search from "../assets/search.svg";

function Content({ response, loading }) {
  if (loading) {
    return (
   <div className="flex flex-col items-center justify-center px-4 text-center py-62 sm:px-6 sm:py-72">
     <img
          src={Search}
          alt="Searching..."
          className="w-40 mb-6 sm:w-56 md:w-64 lg:w-72 opacity-80"
        />
  <span className="text-xl font-medium text-gray-600 animate-pulse">
    Searching perfect show for you...
  </span>
</div>
    );
  }

  if (!response) {
    return (
      <div className="flex flex-col items-center justify-center px-4 text-center py-62 sm:px-6 sm:py-72">
        <img
          src={Empty}
          alt="No content available"
          className="w-40 mb-6 sm:w-56 md:w-64 lg:w-72 opacity-80"
        />
        <span className="text-lg text-gray-600 sm:text-xl md:text-2xl">
          Start by making a search
        </span>
      </div>
    );
  }

  // Split AI response into movie blocks
const movieBlocks = response
  .split(/---+/) // split on '---' or more
  .map((block) => block.trim())
  .filter(Boolean);

return (

  <div className="max-w-3xl mx-auto mt-12 pt-12 sm:pt-24 pb-36 sm:pb-48 space-y-6 px-4">
    {movieBlocks.slice(0, 6).map((block, index) => {
      const titleMatch = block.match(/\*\*Title:\*\*\s*(.*)/i);
      const title = titleMatch?.[1]?.trim() || `Suggestion ${index + 1}`;

      const platformMatch = block.match(/\*\*Platform:\*\*\s*(.*)/i);
      const platforms = platformMatch?.[1]?.trim() || "N/A";

      const ratingMatch = block.match(/\*\*Rating:\*\*\s*(.*)/i);
      const rating = ratingMatch?.[1]?.trim() || "N/A";

      const descMatch = block.match(/\*\*Description:\*\*\s*([\s\S]*)/i);
      const description = descMatch?.[1]?.trim() || "No description available.";

      const trailerSearchLink = `https://www.youtube.com/results?search_query=${encodeURIComponent(title + " official trailer")}`;

      return (
        <details
          key={index}
          className="group bg-white px-6 py-5 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-300"
        >
          <summary className="cursor-pointer text-lg font-semibold text-black list-none flex items-center justify-between">
            <span>🎬 {title}</span>
            <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
          </summary>

          <div className="mt-4 text-sm text-gray-800 space-y-2">
            <p>
              <span className="font-medium">📺 Streaming on:</span> {platforms}
            </p>
            <p>
              <span className="font-medium">⭐ Rating:</span> {rating}
            </p>
            <p className="pt-1 whitespace-pre-line">{description}</p>

            <div className="pt-4">
              <a
                href={trailerSearchLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-neutral-800 transition"
              >
                ▶️ Search Trailer on YouTube
              </a>
            </div>
          </div>
        </details>
      );
    })}
  </div>
);




}

export default Content;
