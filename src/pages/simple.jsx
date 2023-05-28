import React from "react";
import { Link } from "react-router-dom";

export default function Simple() {
  return (
    <div className="w-full h-full bg-black flex-col text-white flex items-center justify-center gap-[30px]">
      <h1>Work in Progress</h1>
      <Link to="/">
        <button className="bg-white p-[7px] shadow-[rgba(255, 255, 255, 0.35) 0px 5px 15px;] text-black rounded font-bold">Home</button>
      </Link>
    </div>
  );
}
