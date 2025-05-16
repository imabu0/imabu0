import React from "react";

export const Sidebar = ({ sectionName }) => {
  const renderSidebarContent = () => {
    switch (sectionName) {
      case "about":
        return (
          <ul className="pl-4 list-disc space-y-2">
            <li>{">education"}</li>
            <li>{">skill"}</li>
          </ul>
        );
      case "projects":
        return (
          <ul className="pl-4 list-disc space-y-2">
            <li>
              {">projects"}
              <ul className="pl-4 list-circle mt-1 space-y-1">
                <li>infinite cloud</li>
                <li>evently</li>
                <li>amoha saas</li>
                <li>gaminoz</li>
                <li>mshstudio</li>
                <li>kolorowey</li>
              </ul>
            </li>
          </ul>
        );
      case "feedback":
        return (
          <ul className="pl-4 list-disc space-y-2">
            <li>{">feedback"}</li>
          </ul>
        );
      case "contact":
        return (
          <ul className="pl-4 list-disc space-y-2">
            <li>{">contact"}</li>
          </ul>
        );
      default:
        return <p className="text-gray-500">Select a section</p>;
    }
  };

  return (
    <div className="text-white w-full h-full">
      {renderSidebarContent()}
    </div>
  );
};
