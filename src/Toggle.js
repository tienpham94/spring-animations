import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const Toggle = () => {
  const [isToggled, setToggle] = useState(false);
  const { y, color } = useSpring({
    // opacity: isToggled ? 1 : 0,
    color: isToggled ? "tomato" : "green",
    y: isToggled ? 0 : -50
  });

  return (
    <div>
      <animated.h1
        style={{
          color,
          transform: y.interpolate(y => `translate3d(0, ${y}px, 0)`)
        }}
      >
        Hello
      </animated.h1>
      <button onClick={() => setToggle(!isToggled)}>Toggle</button>
    </div>
  );
};

export default Toggle;
