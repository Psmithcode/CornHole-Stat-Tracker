import { useState } from "react";
import SimpleCounter from "./components/SimpleCounter";
import Singles from "./pages/Singles";
import SinglesNew from "./pages/SinglesNew";

function App() {
  return (
    <div className="App h-screen bg-gray-300 w-full flex justify-center items-center">
      <SinglesNew />
    </div>
  );
}

export default App;
