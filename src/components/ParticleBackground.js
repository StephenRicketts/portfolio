import Particles from "react-tsparticles";
import { Component } from "react";

class ParticleBackground extends Component {
  render() {
    return (
      <Particles
        height={window.outerHeight}
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "rgba(17, 24, 39)",
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "window",
            events: {
              onClick: {
                enable: false,
              },
              onHover: {
                enable: false,
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
            },
          },
          particles: {
            color: {
              value: "rgba(110, 231, 183)",
            },

            collisions: {
              enable: true,
            },
            move: {
              direction: "left",
              enable: true,
              outMode: "out",
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 40,
            },
            opacity: {
              value: 1,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 3,
            },
          },
          detectRetina: true,
        }}
      />
    );
  }
}

export default ParticleBackground;
