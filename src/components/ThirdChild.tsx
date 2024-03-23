import React, { useContext } from "react";
import { AgeContext } from "../context/AgeContext";

const ThirdChild = () => {
  const { age } = useContext(AgeContext);
  return <div>The minimum drinking age in the US is {age}</div>;
};

export default ThirdChild;
