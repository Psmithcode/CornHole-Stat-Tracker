import React from "react";
import { useState } from "react";

export default function SimpleCounter(props) {
  const { points, setPoints, player } = props;
  const handleIncrement = () => {
    setPoints(points + 1);
  };
  const handleDecrement = () => {
    if (points === 0) {
      setPoints(0);
      return
    }
    setPoints(points - 1);
  };

  return (
    <div
      className={`w-full h-[45%] ${
        player === 1 ? "bg-blue-200" : "bg-red-200"
      } p-[3px] rounded text-white flex flex-col justify-center items-center min-[650px]:h-full min-[650px]:w-[45%]`}
    >
      <p
        className={`absolute text-9xl ${
          player === 1 ? "text-blue-700" : "text-red-700"
        }`}
      >
        {points}
      </p>
      <button
        id="increment"
        onClick={handleIncrement}
        className="w-[100%] h-[50%] z-20"
      ></button>
      <hr></hr>
      <button
        id="decrement"
        onClick={handleDecrement}
        className="w-[100%] h-[50%] z-20"
      ></button>
    </div>
  );
}
