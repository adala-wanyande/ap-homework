import React, { useState } from "react";
import MyButton from "./MyButton";

const MyApp = () => {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>Welcome to my app</h1>
      <MyButton handleClick={handleClick} count={count}></MyButton>
      <MyButton handleClick={handleClick} count={count}></MyButton>
    </>
  );
};

export default MyApp;
