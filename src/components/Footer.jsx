import React from "react";
import footer from "../assets/footer.svg";

function Footer() {
  return (
    <div className="flex flex-col items-center justify-between gap-6 px-8 py-8 m-6 text-white bg-black sm:flex-col md:flex-row md:items-center md:px-12 md:py-10 rounded-2xl">
      <div className="space-y-2 text-center md:text-left">
        <p className="text-2xl font-semibold md:text-4xl">
          Don’t guess. Just vibe.
        </p>
        <span className="block text-base md:text-xl">
          Developed with ❤️ by Neha Ghariyal
        </span>
      </div>

      <div className="w-36 md:w-auto">
        <img
          src={footer}
          alt="Footer"
          className="object-contain w-full h-auto"
        />
      </div>
    </div>
  );
}

export default Footer;
