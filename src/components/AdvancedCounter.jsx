import React from "react";
import { useState } from "react";

export default function AdvancedCounter(props) {
  const { score, player, setPoints, roundScores, setIsActive, isActive } =
    props;

  const handleClick = () => {
    setIsActive(true);
  };

  return (
    <div
      onClick={handleClick}
      className={`w-full h-[37.5%] ${
        player === 1 ? "bg-blue-200" : "bg-red-200"
      } p-[3px] rounded relative text-white flex flex-col justify-center items-center`}
    >
      <p
        className={`h-auto leading-[30px] absolute top-[60px] flex justify-center items-center text-[230px] ${
          player === 1 ? "text-blue-800" : "text-red-800"
        }`}
      >
        {score}
      </p>
      <div className="min-h-[20%] px-[5px] pb-[2px] bottom-[0px] overflow-y-scroll absolute w-full flex gap-[10px] ">
        {roundScores.map((round, idx) => (
          <div className={`flex flex-col rounded ${
            player === 1 ? "bg-blue-500" : "bg-red-500"
          }`} key={idx}>

            <p className="text-white font-bold w-[40px] flex justify-center items-center  text-[20px]">R:{idx + 1}</p>
            <hr></hr>
            <p className="text-white font-bold w-[40px] flex justify-center text-[12px] items-center ">PTS:{round}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
