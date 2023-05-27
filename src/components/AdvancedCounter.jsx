import React from "react";
import { useState } from "react";

export default function AdvancedCounter(props) {
  const { points, setPoints, setIsActive, isActive } = props;

  const handleClick = () => {
    setIsActive(true);
  };

  return (
    <div className="w-full h-[40%] bg-red-200 p-[3px] rounded text-white flex flex-col justify-center items-center">
      <p className="absolute text-9xl text-red-500">{points}</p>
      <button
        id="increment"
        onClick={handleClick}
        className="w-[100%] h-[50%] bg-white"
      ></button>
      <hr></hr>
      <button
        id="decrement"
        onClick={handleClick}
        className="w-[100%] h-[50%] bg-white"
      ></button>
    </div>
  );
}
