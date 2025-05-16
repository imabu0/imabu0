import React from "react";

export const Projects = () => {
  return (
    <div className="height w-full text-blacks border-b-[.5px] flex items-center justify-between">
      <div className="border-r-[.5px] h-full w-1/6"></div>
      <div className="bg-[#181818] w-4/6 h-full">
        <div>home.jsx</div>
        <div>about.jsx</div>
        <div>projects.jsx</div>
        <div>feedback.jsx</div>
        <div>contact.jsx</div>
      </div>
      <div className="border-l-[.5px] h-full w-1/6 flex justify-center items-center">
        <div className="text-8xl text-[#2d2d2d] rotate-90 tracking-widest">
          projects
        </div>
      </div>
    </div>
  );
};
