import React from 'react';
import Logo from '../assets/logo.svg';

function Navbar() {
  return (
    <div className="flex flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row md:px-12 md:py-8">
      <img src={Logo} alt="Logo" className="w-40 md:w-46" />
      <a
  href="https://github.com/nneha19/Moodflix"
  target="_blank"
  rel="noopener noreferrer"
  className="hidden px-4 py-2 text-sm transition-all duration-300 ease-in-out border-2 border-black cursor-pointer md:block rounded-xl hover:bg-black hover:text-white md:text-base"
>
  Check out Repo
</a>

    </div>
  );
}

export default Navbar;
