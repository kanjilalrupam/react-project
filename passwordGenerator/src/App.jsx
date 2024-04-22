import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [pass, setPass] = useState("");
  const [length, setLength] = useState(8);
  const [numsAllowed, setNumsAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const ref = useRef(null);
  const createPassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numsAllowed) str += "1234567890";
    if (charAllowed) str += "~`!@#$%&{}";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPass(pass);
  }, [length, numsAllowed, charAllowed, setPass]);

  const copyText = useCallback(() => {
    ref.current.select();
    window.navigator.clipboard.writeText(pass);
  }, [pass]);

  useEffect(() => {
    createPassword();
  }, [length, numsAllowed, charAllowed, createPassword]);
  console.log(charAllowed);
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen bg-[#004743] text-white">
        <h1 className="text-center mt-4 text-4xl font-bold">
          Random Password Generator
        </h1>
        <div className="bg-[#e8e4e5] max-w-lg w-[90%] md:w-full shadow-xl shadow-[#87a89f]  rounded-lg my-8 p-4 ">
          <div className=" flex gap-4 flex-wrap flex-col justify-center items-center md:flex-row">
            <input
              className=" outline-none  select-all text-lg px-2 py-1 rounded-md w-[100%] md:w-[70%] text-gray-800"
              type="text"
              value={pass}
              ref={ref}
              onChange={(e) => setPass(e.target.value)}
              readOnly
            />
            <button
              className="w-[100%] md:w-[20%] mb-2 md:mb-0 bg-[#f9bc61] hover:bg-[#fbb24f]   duration-200 rounded-xl text-lg py-1 text-gray-800"
              onClick={copyText}
            >
              Copy
            </button>
          </div>
          <div className="flex justify-center  gap-4 text-lg mt-4 text-gray-800 ">
            <input
              type="range"
              name=""
              id=""
              min={8}
              max={100}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-[50%] md:w-[70%]"
            />
            <label htmlFor="">Length : {length}</label>
          </div>
          <div className="flex justify-center md:justify-start gap-1 text-gray-800  text-lg mt-4">
            <input
              type="checkbox"
              name=""
              id=""
              value={numsAllowed}
              onChange={() => setNumsAllowed((e) => !e)}
            />
            <label htmlFor="">Number Allowed</label>
          </div>
          <div className="flex justify-center md:justify-start gap-1 text-lg mt-4 pb-4 text-gray-800">
            <input
              type="checkbox"
              name=""
              id=""
              value={charAllowed}
              onChange={() => setCharAllowed((e) => !e)}
            />
            <label htmlFor="">Special Character Allowed</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
