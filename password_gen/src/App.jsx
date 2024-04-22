import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [len, setLength] = useState(8);
  const [isNum, setIsNum] = useState(false);
  const [isSpecial, setIsSpecial] = useState(false);
  const handle = useCallback(() => {
    console.log("rendering");
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (isNum) {
      str += "0123456789";
    }
    if (isSpecial) {
      str += "!@#$%^&*()-_=+[{]}|;:'";
    }
    let n = str.length;
    let pass = "";
    console.log(n);
    for (let i = 0; i < len; i++) {
      let ind = Math.floor(Math.random() * n);
      pass += str.charAt(ind);
    }
    console.log(pass);
    setPassword(pass);
  }, [len, isNum, isSpecial, setPassword]);
  const first = useRef(null);
  useEffect(() => {
    handle();
  }, [len, isNum, isSpecial, handle]);
  function copyToClip() {
    first.current?.select();
    window.navigator.clipboard.writeText(password);
  }
  return (
    <div
      className=" flex flex-col items-center justify-center h-screen w-screen"
      style={{ backgroundColor: "#0C0C0C" }}
    >
      <div className="wrap">
        <h1
          className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl"
          style={{ color: "#CC7722" }}
        >
          Password Generator
        </h1>
        <div className="flex w-full items-center space-x-2 ">
          <input
            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            readOnly
            value={password}
            ref={first}
            style={{
              color: "white",
              weight: "bold",
              fontSize: "1.2rem",
            }}
          />
          <button
            type="button"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            onClick={copyToClip}
          >
            Copy
          </button>
        </div>
        <div className="length" style={{ color: "white" }}>
          <div className="mt-4">
            <input
              type="range"
              max={30}
              min={8}
              value={len}
              onChange={(e) => {
                if (isNaN(parseInt(e.target.value))) return;
                setLength(parseInt(e.target.value));
              }}
            />
          </div>

          <label className="block">Length: {len}</label>
        </div>
        <div className="checkers" style={{ color: "white" }}>
          <div className="mt-2">
            <input
              type="checkbox"
              id="number"
              checked={isNum}
              onChange={() => {
                setIsNum((prevNums) => !prevNums);
              }}
            />
            <label htmlFor="number" className="ml-2">
              Numbers
            </label>
          </div>
          <div className="mt-2">
            <input
              type="checkbox"
              id="special"
              checked={isSpecial}
              onChange={() => {
                setIsSpecial((prev) => !prev);
              }}
            />
            <label htmlFor="special" className="ml-2">
              Special
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
