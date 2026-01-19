import { useState } from "react";
import InputBox from "./components/input.jsx";
import useCurrencyInfo from "./hooks/useCurrencyInfo.js";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo || {});

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(0);
  };

  const convert = () => {
    if (!currencyInfo[to]) return;
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex items-center justify-end pr-24 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/1036635/pexels-photo-1036635.jpeg')",
      }}
    >
      {/* RIGHT SIDE CARD */}
      <div className="w-full max-w-md">
        <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-xl">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            {/* FROM */}
            <div className="w-full mb-2">
              <InputBox
                label="From"
                amount={amount}
                onAmountChange={(amount) => setAmount(amount)}
                currencyOption={options}
                selectCurrency={from}
                onCurrencychange={setFrom}
              />
            </div>

            {/* SWAP */}
            <div className="relative w-full h-0.5 my-4">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-3 py-1"
                onClick={swap}
              >
                swap
              </button>
            </div>

            {/* TO */}
            <div className="w-full mb-5">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOption={options}
                selectCurrency={to}
                onCurrencychange={setTo}
                amountDisabled
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
