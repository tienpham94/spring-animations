import React, { useState } from "react";
import { useTransition, animated } from "react-spring";

const Toggle = () => {
  const [items, setItems] = useState([
    {
      letter: "S",
      key: 1
    },
    {
      letter: "a",
      key: 2
    },
    {
      letter: "b",
      key: 3
    },
    {
      letter: "g",
      key: 4
    },
    {
      letter: "j",
      key: 5
    }
  ]);
  const transition = useTransition(items, item => item.key, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  return (
    <div>
      {transition.map(({ item, key, props }) => (
        <animated.h1 key={key} style={props}>
          {item.letter}
        </animated.h1>
      ))}
      <button
        onClick={() =>
          setItems({
            letter: "S",
            key: 2
          })
        }
      >
        Toggle
      </button>
    </div>
  );
};

export default Toggle;
