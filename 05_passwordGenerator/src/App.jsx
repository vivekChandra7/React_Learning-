import { useCallback, useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberallowed, setNumberallowed] = useState(false);
  const [charallowed, setCharallowed] = useState(false);
  const [Password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberallowed) {
      string += "0123456789";
    }

    if (charallowed) {
      string += "!@#$%^&*()[]{}<>?/|";
    }

    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * string.length);
      pass += string.charAt(char);
    }

    setPassword(pass);
    setCopied(false);
  }, [length, numberallowed, charallowed]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 9999);
    window.navigator.clipboard.writeText(Password);
    setCopied(true);
  }, [Password]);

  useEffect(() => {
    generatePassword();
  }, [length, numberallowed, charallowed, generatePassword]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-40 text-orange-900 bg-gray-900 text-center">
        <h1 className="text-white text-center m-3">Password Generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            readOnly
            value={Password}
            className="w-full px-3 py-1 outline-none"
            placeholder="Password"
            ref={passwordRef}
          />

          <button
            onClick={copyPasswordToClipboard}
            className={`px-3 py-1 text-white transition-all duration-200
              ${copied ? "bg-green-600" : "bg-orange-500"}
              w-24
            `}
          >
            {copied ? "✔ Copied" : "Copy"}
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label className="text-orange-500">Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={numberallowed}
              id="numberInput"
              onChange={() => setNumberallowed((prev) => !prev)}
            />
            <label htmlFor="numberInput" className="text-orange-500">
              Numbers
            </label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={charallowed}
              id="charInput"
              onChange={() => setCharallowed((prev) => !prev)}
            />
            <label htmlFor="charInput" className="text-orange-500">
              Characters
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
