import React from "react";
import { useState } from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import { BiFullscreen, BiExitFullscreen } from "react-icons/bi";

export default function Home() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const handleFullScreen = () => {
    if (isFullscreen) {
      document.exitFullscreen();
      document.webkitExitFullscreen();
      setIsFullscreen(false);
    } else {
      document.body.requestFullscreen();
      document.body.webkitRequestFullscreen();
      setIsFullscreen(true);
    }
  };
  return (
    <Fade>
      <div className="bg-[var(--light)] w-full h-[100vh]  text-white flex flex-col justify-center relative gap-[30px] items-center">
        <h1 className="text-5xl text-[var(--red)] mb-[50px] font-righteous ">
          Toss Tracker
        </h1>
        {isFullscreen ? (
          <BiExitFullscreen
            size={"25px"}
            onClick={handleFullScreen}
            className="text-[var(--grey)] absolute top-[20px] right-[20px]"
          >
            Fullscreen
          </BiExitFullscreen>
        ) : (
          <BiFullscreen
            size={"25px"}
            onClick={handleFullScreen}
            className="text-[var(--grey)] absolute top-[20px] right-[20px]"
          >
            Fullscreen
          </BiFullscreen>
        )}
        <Link to="/simple">
          <button className="bg-[var(--grey)] p-[7px] shadow-[rgba(255, 255, 255, 0.35) 0px 5px 15px] text-[var(--light)] rounded font-bold">
            Simple Counter
          </button>
        </Link>
        <Link to="/advanced">
          <button className="bg-[var(--grey)] p-[7px] shadow-[rgba(255, 255, 255, 0.35) 0px 5px 15px] text-[var(--light)] rounded font-bold">
            Stats Counter
          </button>
        </Link>
      </div>
    </Fade>
  );
}
