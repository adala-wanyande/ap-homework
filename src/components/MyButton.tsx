import React, { useState } from "react";

const MyButton: React.FC<MyButtonProps> = ({handleClick, count}) => {
  return <button onClick={handleClick}>Clicked {count} times</button>;
};

export default MyButton;
