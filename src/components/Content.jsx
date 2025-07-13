import React from 'react';
import Empty from "../assets/empty.svg";

function Content() {
  return (
    <div className="flex flex-col items-center justify-center px-4 text-center py-52 sm:px-6 sm:py-42">
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

export default Content;
