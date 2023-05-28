import React, { useEffect, useState, useTransition } from "react";
import SimpleCounter from "../components/SimpleCounter";
import AdvancedCounter from "../components/AdvancedCounter";

export default function SinglesNew(props) {
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [points1, setPoints1] = useState(0);
  const [points2, setPoints2] = useState(0);
  const [player1TotalOn, setPlayer1TotalOn] = useState(0);
  const [player1TotalIn, setPlayer1TotalIn] = useState(0);
  const [player1TotalOff, setPlayer1TotalOff] = useState(0);
  const [player1PercentOn, setPlayer1PercentOn] = useState(0);
  const [player1PercentIn, setPlayer1PercentIn] = useState(0);
  const [player1PercentOff, setPlayer1PercentOff] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [round, setRound] = useState(1);
  const [In1, setIn1] = useState(0);
  const [on1, setOn1] = useState(0);
  const [off1, setOff1] = useState(4);
  const [In2, setIn2] = useState(0);
  const [on2, setOn2] = useState(0);
  const [off2, setOff2] = useState(4);

  ///////////Handles the points for players 1 & 2///////////////////////////////

  useEffect(() => {
    //Player 1 stuff///////
    let InPlayer1 = 3 * Number(In1);
    let OnPlayer1 = Number(on1);
    let totalPlayer1 = InPlayer1 + OnPlayer1;

    ///////player 2 stuff///////////////////
    let InPlayer2 = 3 * Number(In2);
    let OnPlayer2 = Number(on2);
    let totalPlayer2 = InPlayer2 + OnPlayer2;

    ///////Calculating who gets points///////////////////////////

    if (totalPlayer1 > totalPlayer2) {
      setPoints2(0);
      setPoints1(totalPlayer1 - totalPlayer2);
    } else if (totalPlayer2 > totalPlayer1) {
      setPoints1(0);
      setPoints2(totalPlayer2 - totalPlayer1);
    } else if (totalPlayer1 === totalPlayer2) {
      setPoints1(0);
      setPoints2(0);
    }
  }, [on1, In1, off1, on2, In2, off2]);

  //////////Handles submitting the round and adding points////////////////

  const handleSubmit = () => {
    setScore1(score1 + points1);
    setScore2(score2 + points2);
    setPlayer1TotalIn(player1TotalIn + In1);
    setPlayer1TotalOn(player1TotalOn + on1);
    setPlayer1TotalOff(player1TotalOff + off1);
    setIsActive(false);
    setRound(round + 1);
    handleReset();
  };

  //////handles the stat calculations///////////////////////////////////////////////////

  useEffect(() => {
    if (round === 1) {
      setPlayer1PercentIn(0);
      setPlayer1PercentOn(0);
      setPlayer1PercentOff(0);
    } else {
      let possible = (round - 1) * 4;
      let percentIn = (player1TotalIn / possible) * 100;
      let percentOn = (player1TotalOn / possible) * 100;
      let percentOff = (player1TotalOff / possible) * 100;
      console.log("percent in:", percentIn);
      console.log("percent on:", percentOn);
      console.log("percent off:", percentOff);
      setPlayer1PercentIn(percentIn);
      setPlayer1PercentOn(percentOn);
      setPlayer1PercentOff(percentOff);
    }
  }, [player1TotalIn, player1TotalOff, player1TotalOn]);

  /////handles setting the off value depending on the values of in and on////////////////

  useEffect(() => {
    let off = 4;
    let sum = Number(In1) + Number(on1);
    setOff1(off - sum);
  }, [In1, on1]);
  useEffect(() => {
    let off = 4;
    let sum = Number(In2) + Number(on2);
    setOff2(off - sum);
  }, [In2, on2]);

  ////////Handles setting the in and on for player 1///////////////////////

  const handleIn1 = async (event) => {
    await setIn1(Number(event.target.innerText));
    console.log(In1);
  };
  const handleOn1 = async (event) => {
    await setOn1(Number(event.target.innerText));
    console.log(on1);
  };

  ////////Handles setting the in and on for player 2///////////////////////

  const handleIn2 = async (event) => {
    await setIn2(Number(event.target.innerText));
    console.log(In2);
  };
  const handleOn2 = async (event) => {
    await setOn2(Number(event.target.innerText));
    console.log(on2);
  };

  ///////////Resets the score screen/////////////////////////

  const handleReset = () => {
    setIn1(0);
    setPoints1(0);
    setPoints2(0);
    setOn1(0);
    setOff1(0);
    setIn2(0);
    setOn2(0);
    setOff2(0);
  };

  const closeWindow = () => {
    setIsActive(false);
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
          <button
            onClick={handleReset}
            className="bg-red-500 text-white rounded mb-2"
          >
            Reset
          </button>
          <section className="w-full flex flex-col gap-[5px]">
            <div className="flex justify-evenly">
              <h3 className="text-2xl text-white font-bold w-[15%]">IN:</h3>
              <button
                onClick={handleIn1}
                className="w-[15%] focus:bg-white focus:text-black bg-blue-500 h-[40px] rounded text-3xl font-bold text-white"
              >
                0
              </button>
              <button
                onClick={handleIn1}
                className="w-[15%] focus:bg-white focus:text-black bg-blue-500 h-[40px] rounded text-3xl font-bold text-white"
              >
                1
              </button>
              <button
                onClick={handleIn1}
                className="w-[15%] focus:bg-white focus:text-black bg-blue-500 h-[40px] rounded text-3xl font-bold text-white"
              >
                2
              </button>
              <button
                onClick={handleIn1}
                className="w-[15%] focus:bg-white focus:text-black bg-blue-500 h-[40px] rounded text-3xl font-bold text-white"
              >
                3
              </button>
              <button
                onClick={handleIn1}
                className="w-[15%] focus:bg-white focus:text-black bg-blue-500 h-[40px] rounded text-3xl font-bold text-white"
              >
                4
              </button>
            </div>
            <div className="flex justify-evenly">
              <h3 className="text-2xl text-white font-bold w-[15%]">ON:</h3>
              <button
                onClick={handleOn1}
                className="w-[15%] focus:bg-white focus:text-black bg-blue-500 h-[40px] rounded text-3xl font-bold text-white"
              >
                0
              </button>
              <button
                onClick={handleOn1}
                className="w-[15%] focus:bg-white focus:text-black bg-blue-500 h-[40px] rounded text-3xl font-bold text-white"
              >
                1
              </button>
              <button
                onClick={handleOn1}
                className="w-[15%] focus:bg-white focus:text-black bg-blue-500 h-[40px] rounded text-3xl font-bold text-white"
              >
                2
              </button>
              <button
                onClick={handleOn1}
                className="w-[15%] focus:bg-white focus:text-black bg-blue-500 h-[40px] rounded text-3xl font-bold text-white"
              >
                3
              </button>
              <button
                onClick={handleOn1}
                className="w-[15%] focus:bg-white focus:text-black bg-blue-500 h-[40px] rounded text-3xl font-bold text-white"
              >
                4
              </button>
            </div>
          </section>

          <section className="w-[80%] bg-white border border-black m-[5px] p-[5px] flex justify-evenly items center">
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
                +{points1}
              </p>
            </div>
          </section>
          <h2>What did you score?</h2>
          <section className="w-full flex flex-col gap-[5px]">
            <div className="flex justify-evenly">
              <h3 className="text-2xl text-white font-bold w-[15%]">IN:</h3>
              <button
                onClick={handleIn2}
                className="w-[15%] focus:bg-white focus:text-black bg-red-500 h-[40px] rounded text-3xl font-bold text-white"
              >
                0
              </button>
              <button
                onClick={handleIn2}
                className="w-[15%] focus:bg-white focus:text-black bg-red-500 h-[40px] rounded text-3xl font-bold text-white"
              >
                1
              </button>
              <button
                onClick={handleIn2}
                className="w-[15%] focus:bg-white focus:text-black bg-red-500 h-[40px] rounded text-3xl font-bold text-white"
              >
                2
              </button>
              <button
                onClick={handleIn2}
                className="w-[15%] focus:bg-white focus:text-black bg-red-500 h-[40px] rounded text-3xl font-bold text-white"
              >
                3
              </button>
              <button
                onClick={handleIn2}
                className="w-[15%] focus:bg-white focus:text-black bg-red-500 h-[40px] rounded text-3xl font-bold text-white"
              >
                4
              </button>
            </div>
            <div className="flex justify-evenly">
              <h3 className="text-2xl text-white font-bold w-[15%]">ON:</h3>
              <button
                onClick={handleOn2}
                className="w-[15%] focus:bg-white focus:text-black bg-red-500 h-[40px] rounded text-3xl font-bold text-white"
              >
                0
              </button>
              <button
                onClick={handleOn2}
                className="w-[15%] focus:bg-white focus:text-black bg-red-500 h-[40px] rounded text-3xl font-bold text-white"
              >
                1
              </button>
              <button
                onClick={handleOn2}
                className="w-[15%] focus:bg-white focus:text-black bg-red-500 h-[40px] rounded text-3xl font-bold text-white"
              >
                2
              </button>
              <button
                onClick={handleOn2}
                className="w-[15%] focus:bg-white focus:text-black bg-red-500 h-[40px] rounded text-3xl font-bold text-white"
              >
                3
              </button>
              <button
                onClick={handleOn2}
                className="w-[15%] focus:bg-white focus:text-black bg-red-500 h-[40px] rounded text-3xl font-bold text-white"
              >
                4
              </button>
            </div>
          </section>

          <section className="w-[80%] bg-white border border-black m-[5px] p-[5px] flex justify-evenly items center">
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
                +{points2}
              </p>
            </div>
          </section>
          <button
            onClick={handleSubmit}
            className="w-full h-[80px] bg-green-300 rounded"
          >
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
      <header className="w-full h-[80px] bg-gray-400 flex gap-3 justify-start">
        <h1>Player1:</h1>
        <div className="flex flex-col bg-black text-white">
          <p>IN</p>
          <hr></hr>
          <p className="text-center items-center">%{player1PercentIn}</p>
        </div>
        <div className="flex flex-col bg-black text-white">
          <p>ON</p>
          <hr></hr>
          <p className="text-center items-center">%{player1PercentOn}</p>
        </div>
        <div className="flex flex-col bg-black text-white">
          <p>OFF</p>
          <hr></hr>
          <p className="text-center items-center">%{player1PercentOff}</p>
        </div>
      </header>
      <AdvancedCounter
        player={1}
        score={score1}
        isActive={isActive}
        setIsActive={setIsActive}
      />
      <div className="w-full h-[60px] bg-gray-400">Round: {round}</div>
      <AdvancedCounter
        player={2}
        score={score2}
        isActive={isActive}
        setIsActive={setIsActive}
      />
    </div>
  );
}
