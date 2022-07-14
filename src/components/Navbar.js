import React from 'react';

export const Navbar = () => {
  return (
    <nav class=" bg-blue-800 flex items-center justify-between px-4 py-2  ">
      <img class="h-12 md:h-20" src="../images/logo.png" alt="" />
      <div class="text-center flex-1">
        <p class="text-white font-bold text-3xl md:text-6xl md:py-4 xl:text-8xl">
          IIIT LUCKNOW
        </p>
      </div>
    </nav>
  );
};
