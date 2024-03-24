import React, { useState } from "react";

const Tribes = () => {
  const [tribes, setTribes] = useState<tribes>([
    "Kisii",
    "Kalenjin",
    "Meru",
    "Kikuyu",
    "Luo",
    "Luhya",
  ]);

  return (
    <>
      <p>There are so many different tribes in Kenya. Some of them include:</p>
      <ul>
        {tribes.map((tribe, index) => {
          return <li key={index}>{tribe}</li>;
        })}
      </ul>
    </>
  );
};

export default Tribes;
