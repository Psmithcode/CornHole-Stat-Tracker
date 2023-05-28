import React from "react";
import { useState } from "react";

export default function AdvancedCounter(props) {
  const { score, player, setPoints, setIsActive, isActive } = props;

  const handleClick = () => {
    setIsActive(true);
  };

  return (
    <div
      onClick={handleClick}
      className={`w-full h-[40%] ${
        player === 1 ? "bg-blue-400" : "bg-red-500"
      } p-[3px] rounded text-white flex flex-col justify-center items-center`}
    >
      <p
        className={`absolute text-[290px] ${
          player === 1 ? "text-blue-400" : "text-red-500"
        }`}
      >
        {score}
      </p>
      <button
        id="increment"
        onClick={handleClick}
        className="w-[100%] h-[50%] bg-white"
      ></button>
      <button
        id="decrement"
        onClick={handleClick}
        className="w-[100%] h-[50%] bg-white"
      ></button>
    </div>
  );
}
