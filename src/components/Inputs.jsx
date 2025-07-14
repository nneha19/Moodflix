import React from "react";
import { useState } from "react";
import { getResponse } from "../../AI";

function Inputs({ setResponse, setLoading }) {

  const [formData, setFormData] = useState({
    Mood: "",
    Genre: "",
    Company: "",
    Duration: "",
    Platform: "",
    Freshness: "",
  });

  const handleChange = (label, value) => {
    setFormData((prev) => ({ ...prev, [label]: value }));
  };  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const aiReply = await getResponse(formData);
    setLoading(false);
  setResponse(aiReply);
  };

  return (
    <div className="w-full px-4 mt-12 sm:px-6 lg:px-0">
      <div className="mx-auto max-w-4xl px-6 py-8 bg-[#f3f3f3] rounded-3xl shadow-[0_4px_0_0_rgba(0,0,0,0.8)]">
        

        <form onSubmit={handleSubmit}>
  <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 lg:gap-10">
    {[{
        label: "Mood",
        options: [
          "Feel-Good",
          "Heartwarming",
                "Dark",
                "Intense",
                "Light & Chill",
              ],
            },
            {
              label: "Genre",
              options: [
                "Action",
                "Romance",
                "Comedy",
                "Thriller",
                "Drama",
                "Sci-Fi",
              ],
            },
            {
              label: "Company",
              options: ["Solo", "Date Night", "Family", "Friends"],
            },
            {
              label: "Duration",
              options: [
                "Under 90 min",
                "Under 2 hours",
                "Binge Series",
                "Short Film",
              ],
            },
            {
              label: "Platform",
              options: [
                "Netflix",
                "Prime Video",
                "Disney+ Hotstar",
                "JioCinema",
                "YouTube",
              ],
            },
            {
              label: "Freshness",
              options: [
                "Trending Now",
                "New Release",
                "All-Time Favorite",
                "Hidden Gems",
              ],
            },
          ].map(({ label, options }) => (
      <div key={label} className="flex flex-col items-center">
        <label className="mb-1 text-sm">{label}</label>
        <div className="relative w-full max-w-[160px]">
          <select
            className="w-full px-4 py-2 pr-8 text-sm border border-black rounded-full appearance-none"
            value={formData[label]}
            onChange={(e) => handleChange(label, e.target.value)}
          >
            {options.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
          <div className="absolute inset-y-0 flex items-center text-xs text-black pointer-events-none right-3">
            ▼
          </div>
        </div>
      </div>
    ))}
  </div>

  <div className="flex justify-center mt-10">
    <button
      type="submit"
      className="px-8 py-3 text-white transition bg-black cursor-pointer rounded-xl hover:bg-neutral-800"
    >
      Search
    </button>
  </div>
</form>


       
      </div>
    </div>
  );
}

export default Inputs;
