import { useState } from "react";
import SimpleCounter from "./components/SimpleCounter";
import Simple from "./pages/simple";
import Advanced from "./pages/advanced";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App h-screen bg-gray-300 w-full flex justify-center items-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/advanced" element={<Advanced />} />
          <Route path="/simple" element={<Simple />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
