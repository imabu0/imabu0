import React from "react";
import { Sidebar } from "../Sidebar/Sidebar";

export const Feedback = () => {
  return (
    <div className="height w-full text-blacks border-b-[.5px] flex items-center justify-between">
      <div className="border-r-[.5px] h-full w-1/6">
        <Sidebar sectionName="feedback" />
      </div>
      <div className="bg-[#181818] w-4/6 h-full">
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
