import { useState } from "react";
import SimpleCounter from "./components/SimpleCounter";
import Simple from "./pages/simple";
import Advanced from "./pages/advanced";
import Home from "./pages/Home";
import Fade from "react-reveal"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* <Fade> */}
        <div className="App h-screen bg-[var(--light)] w-full flex justify-center items-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/advanced" element={<Advanced />} />
            <Route path="/simple" element={<Simple />} />
          </Routes>
        </div>
      {/* </Fade> */}
    </BrowserRouter>
  );
}

export default App;
