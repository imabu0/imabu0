import React from "react";

export const Navbar = () => {
  return (
    <div className="h-8 w-full text-blacks text-center border-b-[.5px] flex items-center justify-between bg-[#181818] sticky top-0 z-50">
      <div className="border-r-[.5px] h-full w-1/6 flex flex-col justify-center">
        imabu
      </div>
      <div className="flex items-center gap-10">
        <div>home.jsx</div>
        <div>about.jsx</div>
        <div>projects.jsx</div>
        <div>feedback.jsx</div>
        <div>contact.jsx</div>
      </div>
      <div className="border-l-[.5px] h-full w-1/6"></div>
    </div>
  );
};
