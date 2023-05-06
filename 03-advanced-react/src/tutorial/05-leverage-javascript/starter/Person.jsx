import React from "react";
// import avatar from "../../../assets/default-avatar.svg";

export function Person({ name, nickName, images }) {
  //   const image = images && images[0] && images[0].small && images[0].small.url;
  const image =
    images?.[0]?.small?.url ?? "https://hackmit.org/assets/speakers/amy.jpg";
  return (
    <div key={name}>
      <img
        src={image}
        alt={name}
        style={{ width: "150px", borderRadius: "50%" }}
      />
      <h2>{name}</h2>
      <h4>Nickname: {nickName || "not available"}</h4>
    </div>
  );
}
