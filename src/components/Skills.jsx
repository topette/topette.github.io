import React from "react";

export const Skills = () => {
  return (
    <div>
      <h1 className="pt-0 sm:pt-0 text-white">
        React <span className="text-xs text-yellow-400">80%</span>
      </h1>
      <div className="mt-2 h-4 relative w-full rounded-full overflow-hidden">
        <div className="w-full h-full bg-gray-200 absolute"></div>
        <div className="h-full bg-yellow-400 absolute w-[80%]"></div>
      </div>
      <h1 className="pt-2 sm:pt-5 text-white">
        Tailwind CSS <span className="text-xs text-red-500">85%</span>
      </h1>
      <div className="mt-2 h-4 relative w-full rounded-full overflow-hidden">
        <div className="w-full h-full bg-gray-200 absolute"></div>
        <div className="h-full bg-red-500 absolute w-[85%]"></div>
      </div>
      <h1 className="pt-2 sm:pt-5 text-white">
        Figma <span className="text-xs text-green-500">95%</span>
      </h1>
      <div className="mt-2 h-4 relative w-full rounded-full overflow-hidden">
        <div className="w-full h-full bg-gray-200 absolute "></div>
        <div className="h-full bg-green-500 absolute w-[95%]"
        ></div>
      </div>
      <h1 className="pt-2 sm:pt-5 text-white">
        Javascript <span className="text-xs text-blue-500">30%</span>
      </h1>
      <div className="mt-2 h-4 relative w-full rounded-full overflow-hidden">
        <div className="w-full h-full bg-gray-200 absolute"></div>
        <div className="h-full bg-indigo-500 absolute w-[20%]"
        ></div>
      </div>
      <h1 className="pt-2 sm:pt-5 text-white">
        Vite <span className="text-xs text-blue-500">50%</span>
      </h1>
      <div className="mb-10 mt-2 h-4 relative w-full rounded-full overflow-hidden">
        <div className="w-full h-full bg-gray-200 absolute"></div>
        <div
          className="h-full bg-gray-600 absolute w-[50%]"
        ></div>
      </div>
    </div>
  );
};
