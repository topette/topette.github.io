import React from "react";

export const Skills = () => {
  return (
    <div>
      <h1 className="pt-0 sm:pt-0 text-white">
        React <span className="text-xs text-yellow-400"><span className="skillnumber1"></span>%</span>
      </h1>
      <div className="mt-2 h-4 relative w-full rounded-full overflow-hidden">
        <div className="w-full h-full bg-yellow-400 absolute"></div>
        <div className="h-full bg-gray-200 absolute w-[80%] skill-animate1 skillanimate1"></div>
      </div>
      <h1 className="pt-2 sm:pt-5 text-white">
        Tailwind CSS <span className="text-xs text-red-500"><span className="skillnumber2"></span>%</span>
      </h1>
      <div className="mt-2 h-4 relative w-full rounded-full overflow-hidden">
        <div className="w-full h-full bg-red-500 absolute "></div>
        <div className="h-full bg-gray-200 absolute w-[85%] skill-animate2 skillanimate2"></div>
      </div>
      <h1 className="pt-2 sm:pt-5 text-white">
        Figma <span className="text-xs text-green-500"><span className="skillnumber3"></span>%</span>
      </h1>
      <div className="mt-2 h-4 relative w-full rounded-full overflow-hidden">
        <div className="w-full h-full bg-green-500 absolute"></div>
        <div className="h-full bg-gray-200 absolute w-[95%] skill-animate3 skillanimate3"
        ></div>
      </div>
      <h1 className="pt-2 sm:pt-5 text-white">
        Javascript <span className="text-xs text-blue-500"><span className="skillnumber4"></span>%</span>
      </h1>
      <div className="mt-2 h-4 relative w-full rounded-full overflow-hidden">
        <div className="w-full h-full bg-indigo-500 absolute"></div>
        <div className="h-full bg-gray-200 absolute w-[60%] skill-animate2 skillanimate2"
        ></div>
      </div>
      <h1 className="pt-2 sm:pt-5 text-white">
        Wordpress <span className="text-xs text-blue-500"><span className="skillnumber5"></span>%</span>
      </h1>
      <div className="mb-10 mt-2 h-4 relative w-full rounded-full overflow-hidden">
        <div className="w-full h-full bg-gray-600 absolute"></div>
        <div
          className="h-full bg-gray-200 absolute w-[60%] skill-animate1 skillanimate1"
        ></div>
      </div>
    </div>
  );
};
