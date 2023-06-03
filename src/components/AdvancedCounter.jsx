import React from "react";
import { useState } from "react";

export default function AdvancedCounter(props) {
  const {
    score,
    player,
    setPoints,
    roundScores,
    setIsActive,
    isActive,
    playerName,
    setPlayerName,
  } = props;

  const handleClick = () => {
    setIsActive(true);
  };

  return (
    <div
      onClick={handleClick}
      className={`w-full h-[45%] ${
        player === 1 ? "bg-blue-200" : "bg-red-200"
      } p-[3px] rounded relative text-white flex flex-col justify-center items-center min-[650px]:h-full min-[650px]:w-[45%]`}
    >
      {/* /////////Score Text////////////////////////////////////////////////// */}
      <p
        className={`h-auto leading-[30px] absolute top-[80px] flex justify-center items-center text-[230px] ${
          player === 1 ? "text-blue-800" : "text-red-800"
        }`}
      >
        {score}
      </p>

      {/* /////////ROUNDS TEXT BOXES//////////////////////////////////////////// */}

      <div className=" px-[5px] pb-[2px] bottom-[0px] max-h-[60px] overflow-y-scroll absolute w-full flex gap-[10px] no-scrollbar ">
        {roundScores.map((round, idx) => (
          <div
            className={` flex flex-col rounded ${
              player === 1 ? "bg-blue-500" : "bg-red-500"
            }`}
            key={idx}
          >
            <p className="text-white font-bold w-[40px] flex justify-center items-center  text-[20px]">
              R:{idx + 1}
            </p>
            <hr></hr>
            <p className="text-white font-bold w-[40px] flex justify-center text-[12px] items-center ">
              PTS:{round}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
