import React, { useState } from "react";
import FirstChild from "./FirstChild";

const Parent = () => {
  const [age, setAge] = useState<Age>(21);
  return <FirstChild />;
};

export default Parent;
