import { useState } from "react";

function App() {
  const [bgColor, setbgColor] = useState("bg-blue-500");

  function bgchanger(color) {
    setbgColor(color);
  }

  return (
    <>
      <div className={`w-full h-screen ${bgColor} duration-200`}>
        <div className=" flex flex-wrap justify-center fixed bottom-12 px-2 inset-x-0 ">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              className="px-4 py-1 text-white w-24  text-lg bg-blue-500 rounded-2xl"
              onClick={() => bgchanger("bg-blue-500")}
            >
              Blue
            </button>
            <button
              className="px-4 py-1 text-white w-24  text-lg bg-red-500 rounded-2xl"
              onClick={() => bgchanger("bg-red-500")}
            >
              Red
            </button>
            <button
              className="px-4 py-1 text-white w-24  text-lg bg-yellow-500 rounded-2xl"
              onClick={() => bgchanger("bg-yellow-500")}
            >
              Yellow
            </button>
            <button
              className="px-4 py-1 text-white w-24  text-lg bg-green-500 rounded-2xl"
              onClick={() => bgchanger("bg-green-500")}
            >
              Green
            </button>
            <button
              className="px-4 py-1 text-white w-24  text-lg bg-gray-500 rounded-2xl"
              onClick={() => bgchanger("bg-gray-500")}
            >
              Gray
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
