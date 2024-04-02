import React from "react";

const User = () => {
  let user = {
    name: "Adala",
    imageUrl: "https://source.unsplash.com/random",
    imageSize: "240px",
  };

  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </>
  );
};

export default User;
