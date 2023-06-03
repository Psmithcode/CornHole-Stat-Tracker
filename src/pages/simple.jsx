import React, { useState } from "react";
import { Link } from "react-router-dom";
import SimpleCounter from "../components/SimpleCounter";

export default function Simple() {
  const [points1, setPoints1] = useState(0)
  const [points2, setPoints2] = useState(0)
  return (
    <div className="w-full h-full bg-[var(--light)] flex-col text-white flex items-center justify-between min-[650px]:flex-row">
      <SimpleCounter points={points1} setPoints={setPoints1} player={1}></SimpleCounter>
      <Link to="/">
        <button className="bg-[var(--grey)] p-[7px] shadow-[rgba(255, 255, 255, 0.35) 0px 5px 15px;] text-[var(--light)] rounded font-bold">Home</button>
      </Link>
      <SimpleCounter points={points2} setPoints={setPoints2} player={2}></SimpleCounter>
    </div>
  );
}
