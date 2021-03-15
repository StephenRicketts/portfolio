import React from "react";

export default function Name() {
  return (
    <div
      style={{
        borderBottomLeftRadius: "50%",
        borderBottomRightRadius: "50%",
      }}
      className="bg-gray-700 p-6 w-full h-1/6 text-center z-10"
    >
      <p className="text-green-200 text-5xl tracking-widest">
        Stephen Ricketts
      </p>
      <p className="text-green-200 my-8 text-2xl tracking-wide">
        Full Stack Developer
      </p>
    </div>
  );
}
