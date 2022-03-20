import React from "react";

export default function House({ house }) {
  return (
    <div>
      <img src={house.picture} width="100%" alt="House picture" />
      <p>
        {house.type} - {house.town}
      </p>
      <p>{house.title}</p>
    </div>
  );
}
