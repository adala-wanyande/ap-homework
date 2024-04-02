import React from "react";

const MyButton = () => {
  const handleClick = () => {
    alert("You clicked me!");
  };

  return <button onClick={handleClick}>Click me</button>;
};

export default MyButton;
