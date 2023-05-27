import React, { useState, useTransition } from "react";
import SimpleCounter from "../components/SimpleCounter";
import AdvancedCounter from "../components/AdvancedCounter";

export default function Singles(props) {
  const [points1, setPoints1] = useState(0);
  const [points2, setPoints2] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [round, setRound] = useState(1);
  const [In1, setIn1] = useState(0);
  const [on1, setOn1] = useState(0);
  const [off1, setOff1] = useState(0);
  const [In2, setIn2] = useState(0);
  const [on2, setOn2] = useState(0);
  const [off2, setOff2] = useState(0);
  const [total1, setTotal1] = useState(0);
  const [total2, setTotal2] = useState(0);
  const [inPrompt, setInPrompt] = useState(false);
  const [threeInAmount, setThreeInAmount] = useState(null);
  const [num, setNum] = useState(null);

  const closeWindow = () => {
    setIsActive(false);
  };

  const handleThreeFour = (event) => {
    let number = event.target.innerText;
    setThreeInAmount(number);
    handleScore();
  };

  const handleScore = (event) => {
    setThreeInAmount(null);
    setIn1(0);
    setOff1(0);
    setOn1(0);
    setTotal1(0);
    setInPrompt(false);
    let number = event.target.innerText;
    setNum(number);
    if (number == 0) {
      setInPrompt(false);
      setOff1(4);
    }
    if (number == 1) {
      setInPrompt(false);
      setOn1(1);
      setOff1(3);
    }
    if (number == 2) {
      setInPrompt(false);
      setOn1(2);
      setOff1(2);
    }

    /////////////////////////////////////////////////////////////////////////////////////

    if (number == 3 && threeInAmount === null) {
      setInPrompt(true);
    }
    if (number == 3 && threeInAmount === 1) {
      setIn1(1);
      setOff1(3);
    }
    if (number == 3 && threeInAmount === 0) {
      setOn1(4);
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////

    if (number == 5) {
      setIn1(1);
      setOn1(2);
      setOff1(1);
    }
    if (number == 7) {
      setIn1(2);
      setOn1(1);
      setOff1(1);
    }
    if (number == 8) {
      setIn1(2);
      setOn1(2);
    }
    if (number == 9) {
      setIn1(3);
      setOff1(1);
    }
    if (number == 10) {
      setIn1(3);
      setOn1(1);
    }
    if (number == 12) {
      setIn1(4);
    }
  };

  if (isActive) {
    return (
      <div
        id="select-score"
        className="flex flex-col h-[auto] w-[100%] bg-gray-400"
      >
        <header className="flex justify-between bg-blue-300 p-[5px]">
          <h1>ENTER YOUR ROUND {round} Score</h1>
          <button onClick={closeWindow}>X</button>
        </header>
        <main className="flex flex-col justify-center items-center p-[10px]">
          <h2>What did you score?</h2>
          <section className="w-full flex flex-wrap justify-evenly gap-[1px]">
            <button
              onClick={handleScore}
              className="h-[30px] w-[16%] bg-blue-300 rounded border font-bold text-white border-black"
            >
              0
            </button>
            <button
              onClick={handleScore}
              className="h-[30px] w-[16%] bg-blue-300 rounded border font-bold text-white border-black"
            >
              1
            </button>
            <button
              onClick={handleScore}
              className="h-[30px] w-[16%] bg-blue-300 rounded border font-bold text-white border-black"
            >
              2
            </button>
            <button
              onClick={handleScore}
              className="h-[30px] w-[16%] bg-blue-300 rounded border font-bold text-white border-black"
            >
              3
            </button>
            <button
              onClick={handleScore}
              className="h-[30px] w-[16%] bg-blue-300 rounded border font-bold text-white border-black"
            >
              4
            </button>
            <button
              onClick={handleScore}
              className="h-[30px] w-[16%] bg-blue-300 rounded border font-bold text-white border-black"
            >
              5
            </button>
            <button
              onClick={handleScore}
              className="h-[30px] w-[16%] bg-blue-300 rounded border font-bold text-white border-black"
            >
              6
            </button>
            <button
              onClick={handleScore}
              className="h-[30px] w-[16%] bg-blue-300 rounded border font-bold text-white border-black"
            >
              7
            </button>
            <button
              onClick={handleScore}
              className="h-[30px] w-[16%] bg-blue-300 rounded border font-bold text-white border-black"
            >
              8
            </button>
            <button
              onClick={handleScore}
              className="h-[30px] w-[16%] bg-blue-300 rounded border font-bold text-white border-black"
            >
              9
            </button>
            <button
              onClick={handleScore}
              className="h-[30px] w-[16%] bg-blue-300 rounded border font-bold text-white border-black"
            >
              10
            </button>
            <button
              onClick={handleScore}
              className="h-[30px] w-[16%] bg-blue-300 rounded border font-bold text-white border-black"
            >
              12
            </button>
          </section>
          {inPrompt === true && (
            <div className="w-[60%] flex-wrap text-center flex">
              <h2 className="w-full">How many were in?</h2>
              <button
                className="w-[49%] rounded font-bold text-white bg-blue-500"
                onClick={handleThreeFour}
              >
                0
              </button>
              <button
                className="w-[49%] rounded font-bold text-white bg-blue-500"
                onClick={handleThreeFour}
              >
                1
              </button>
            </div>
          )}
          <section className="w-[60%] bg-white border border-black m-[5px] p-[5px] flex justify-evenly items center">
            <div className="w-[24%] h-full bg-red-200 flex flex-col items-center">
              <p className="bg-gray-500 w-full text-center text-white font-bold">
                IN
              </p>
              <p className="bg-white w-full text-center font-bold">{In1}</p>
            </div>
            <div className="w-[24%] h-full bg-red-200 flex flex-col items-center">
              <p className="bg-gray-500 w-full text-center text-white font-bold">
                ON
              </p>
              <p className="bg-white w-full text-center font-bold">{on1}</p>
            </div>
            <div className="w-[24%] h-full bg-red-200 flex flex-col items-center">
              <p className="bg-gray-500 w-full text-center text-white font-bold">
                OFF
              </p>
              <p className="bg-white w-full text-center font-bold">{off1}</p>
            </div>
            <div className="w-[24%] h-full bg-red-200 flex flex-col items-center">
              <p className="bg-gray-500 w-full text-center text-white font-bold">
                POINTS
              </p>
              <p className="bg-white w-full text-green-500 text-center font-bold">
                +5
              </p>
            </div>
          </section>
          <h2>What did you score?</h2>
          <section className="w-full flex flex-wrap justify-evenly gap-[1px]">
            <button
              onClick={handleScore}
              className="h-[30px] w-[16%] bg-blue-300 rounded border font-bold text-white border-black"
            >
              0
            </button>
            <button
              onClick={handleScore}
              className="h-[30px] w-[16%] bg-blue-300 rounded border font-bold text-white border-black"
            >
              1
            </button>
            <button
              onClick={handleScore}
              className="h-[30px] w-[16%] bg-blue-300 rounded border font-bold text-white border-black"
            >
              2
            </button>
            <button
              onClick={handleScore}
              className="h-[30px] w-[16%] bg-blue-300 rounded border font-bold text-white border-black"
            >
              3
            </button>
            <button
              onClick={handleScore}
              className="h-[30px] w-[16%] bg-blue-300 rounded border font-bold text-white border-black"
            >
              4
            </button>
            <button
              onClick={handleScore}
              className="h-[30px] w-[16%] bg-blue-300 rounded border font-bold text-white border-black"
            >
              5
            </button>
            <button
              onClick={handleScore}
              className="h-[30px] w-[16%] bg-blue-300 rounded border font-bold text-white border-black"
            >
              6
            </button>
            <button
              onClick={handleScore}
              className="h-[30px] w-[16%] bg-blue-300 rounded border font-bold text-white border-black"
            >
              7
            </button>
            <button
              onClick={handleScore}
              className="h-[30px] w-[16%] bg-blue-300 rounded border font-bold text-white border-black"
            >
              8
            </button>
            <button
              onClick={handleScore}
              className="h-[30px] w-[16%] bg-blue-300 rounded border font-bold text-white border-black"
            >
              9
            </button>
            <button
              onClick={handleScore}
              className="h-[30px] w-[16%] bg-blue-300 rounded border font-bold text-white border-black"
            >
              10
            </button>
            <button
              onClick={handleScore}
              className="h-[30px] w-[16%] bg-blue-300 rounded border font-bold text-white border-black"
            >
              12
            </button>
          </section>
          <section className="w-[60%] bg-white border border-black m-[5px] p-[5px] flex justify-evenly items center">
            <div className="w-[24%] h-full bg-red-200 flex flex-col items-center">
              <p className="bg-gray-500 w-full text-center text-white font-bold">
                IN
              </p>
              <p className="bg-white w-full text-center font-bold">{In2}</p>
            </div>
            <div className="w-[24%] h-full bg-red-200 flex flex-col items-center">
              <p className="bg-gray-500 w-full text-center text-white font-bold">
                ON
              </p>
              <p className="bg-white w-full text-center font-bold">{on2}</p>
            </div>
            <div className="w-[24%] h-full bg-red-200 flex flex-col items-center">
              <p className="bg-gray-500 w-full text-center text-white font-bold">
                OFF
              </p>
              <p className="bg-white w-full text-center font-bold">{off2}</p>
            </div>
            <div className="w-[24%] h-full bg-red-200 flex flex-col items-center">
              <p className="bg-gray-500 w-full text-center text-white font-bold">
                POINTS
              </p>
              <p className="bg-white w-full text-green-500 text-center font-bold">
                +5
              </p>
            </div>
          </section>
          <button className="w-full h-[80px] bg-green-300 rounded">
            SUBMIT ROUND
          </button>
        </main>
      </div>
    );
  }
  return (
    <div
      id="singles"
      className="w-full h-full flex flex-col justify-start items-center"
    >
      <header className="w-full h-[80px] bg-gray-400">Player Stats</header>
      <AdvancedCounter
        points={points1}
        isActive={isActive}
        setIsActive={setIsActive}
        setPoints={setPoints1}
      />
      <div className="w-full h-[60px] bg-gray-400">Tool Buttons</div>
      <AdvancedCounter
        points={points2}
        isActive={isActive}
        setIsActive={setIsActive}
        setPoints={setPoints2}
      />
    </div>
  );
}
