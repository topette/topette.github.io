import React from "react";
import { useSpring, animated } from "react-spring";
import headerimage1 from "../assets/parallax/1_03.png";
import headerimage2 from "../assets/parallax/2_03.png";
import headerimage3 from "../assets/parallax/3_03.png";
import headerimage4 from "../assets/parallax/4_03.png";

const calc = (x, y) => [
  -(y - window.innerHeight / 3) / 30,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export const HeaderImage2 = () => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 20 },
  }));
  return (
    <>
      <div className="max-w-xl">
        <animated.div
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{ transform: props.xys.to(trans) }}
        >
          <img className="image2" src={headerimage3} />
          <img className="image2" src={headerimage4} />
          <img className="image2" src={headerimage1} />
          <img className="image2" src={headerimage2} />
        </animated.div>
      </div>
    </>
  );
};
