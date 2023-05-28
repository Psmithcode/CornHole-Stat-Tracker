import React from "react";

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-black w-full h-full text-white flex flex-col justify-center gap-[30px] items-center">
      <h1 className="text-2xl">Big Kevs Cornhole Tracker</h1>
      <Link to="/simple">
        <button className="bg-white p-[7px] shadow-[rgba(255, 255, 255, 0.35) 0px 5px 15px;] text-black rounded font-bold">Simple Counter</button>
      </Link>
      <Link to="/advanced">
        <button className="bg-white p-[7px] shadow-[rgba(255, 255, 255, 0.35) 0px 5px 15px;] text-black rounded font-bold">Advanced Counter</button>
      </Link>
    </div>
  );
}
