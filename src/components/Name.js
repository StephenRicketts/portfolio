import React from "react";

export default function Name() {
  return (
    <div
      id="home"
      style={{
        borderBottomLeftRadius: "50%",
        borderBottomRightRadius: "50%",
      }}
      className="bg-gray-700 text-green-300 p-6 w-full h-1/6 text-center z-10 border-b border-green-300"
    >
      <p className="text-2xl md:text-4xl tracking-widest">Stephen Ricketts</p>
      <p className=" my-8 md:text-2xl tracking-wide ">Full Stack Developer</p>
    </div>
  );
}
