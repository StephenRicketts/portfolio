import React from "react";
import ParticleBackground from "./ParticleBackground";

const container = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: "-1",
};

export default function ParticleContainer(props) {
  return (
    <div className="font-mono" style={container}>
      <ParticleBackground />
    </div>
  );
}
