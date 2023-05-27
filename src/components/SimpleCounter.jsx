import React from "react";
import { useState } from "react";

export default function SimpleCounter(props) {
  const { points, setPoints } = props;
  const handleIncrement = () => {
    setPoints(points + 1);
  };
  const handleDecrement = () => {
    setPoints(points - 1);
  };

  return (
    <div className="w-full h-[40%] bg-red-200 p-[3px] rounded text-white flex flex-col justify-center items-center">
      <p className="absolute text-9xl text-red-500">{points}</p>
      <button
        id="increment"
        onClick={handleIncrement}
        className="w-[100%] h-[50%] bg-white"
      ></button>
      <hr></hr>
      <button
        id="decrement"
        onClick={handleDecrement}
        className="w-[100%] h-[50%] bg-white"
      ></button>
    </div>
  );
}
