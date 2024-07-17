import { useState } from "react";
import React from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

const ContainerComponents = () => {
  const [x, setX] = useState(42);
  const [currentX, setCurrentX] = useState(x);

  const incrementX = () => {
    setCurrentX((prevX) => prevX + 1);
  };

  return (
    <div className="border p-4 ">
      <ComponentA x={x} currentX={currentX} incrementX={incrementX} />
    </div>
  );
};

export default ContainerComponents;
