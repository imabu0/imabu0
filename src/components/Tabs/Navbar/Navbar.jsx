import React from "react";
import {
  InstagramOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from "@ant-design/icons";

export const Navbar = () => {
  return (
    <div className="h-8 w-full text-blacks text-center border-b-[.5px] flex items-center justify-between bg-[#181818] sticky top-0 z-50">
      <div className="border-r-[.5px] h-full w-1/6 flex items-center justify-center font-bold">
        imabu
      </div>
      <div className="flex items-center gap-10">
        <div>home.jsx</div>
        <div>about.jsx</div>
        <div>projects.jsx</div>
        <div>contact.jsx</div>
      </div>
      <div className="border-l-[.5px] h-full w-1/6 flex items-center justify-center gap-4">
        <a
          href="https://www.instagram.com/imabu0/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition duration-200"
        >
          <InstagramOutlined className="text-lg" />
        </a>
        <a
          href="https://www.linkedin.com/in/imabu0/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition duration-200"
        >
          <LinkedinOutlined className="text-lg" />
        </a>
        <a
          href="https://github.com/imabu0"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition duration-200"
        >
          <GithubOutlined className="text-lg" />
        </a>
      </div>
    </div>
  );
};
