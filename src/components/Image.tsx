import React from "react";
import './Image.css'

const Image = () => {
  return <img src={require("./mario.png")} className="avatar" alt="Mario" />;
};

export default Image;
