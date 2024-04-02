import React from "react";

const Content = () => {
  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
  };

  let content;

  if (getRandomInt(2) == 1) {
    content = "1";
  } else content = "0";

  return <div>{content}</div>;
};

export default Content;
