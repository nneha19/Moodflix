import React from "react";
import Camera from "../assets/camera.svg";
import Inputs from "./Inputs";

function Intro() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 px-6 mx-auto text-center py-30 max-w-7xl md:py-26 md:flex-row md:gap-14 lg:gap-24 md:text-left">
      <img
        src={Camera}
        alt="Camera"
        className="max-w-full w-52 sm:w-60 md:w-72 lg:w-80 xl:w-96"
      />
      <div>
        <div className="max-w-2xl text-lg leading-relaxed md:text-xl">
            Tired of endlessly scrolling? Just tell us your mood, who you’re watching with, how much time you’ve got, and your go-to platform — we’ll serve up the perfect flick. No stress, no overthinking — just sit back, relax, and press play.

        </div>
      
      </div>
    </div>
  );
}

export default Intro;
