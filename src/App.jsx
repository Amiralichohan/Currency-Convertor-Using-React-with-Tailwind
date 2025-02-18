import "react";
import { useState } from "react";
import "./App.css";
import Input from "./Components/Input";
import UseCurrencyinfo from "./Hooks/UseCurrencyinfo";


function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("PKR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyinfo = UseCurrencyinfo(from) || {};  // ✅ Ensure it's never undefined
  const Options = Object.keys(currencyinfo || {});  // ✅ Fallback to an empty object

  function Swap() {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount); // Corrected swap logic
    setConvertedAmount(amount);
  }

  const convert = () => {
    if (currencyinfo[to]) {
      setConvertedAmount(amount * currencyinfo[to]); // Added check to avoid errors
    }
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/30552273/pexels-photo-30552273/free-photo-of-brooklyn-bridge-and-manhattan-skyline-view.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <Input
                label="From"
                amount={amount}
                currencyOptions={Options}
                onCurrencyChange={(currency) => setFrom(currency)} // Fixed
                selectCurrency={from}
                onAmountChange={(value) => setAmount(value)} // Allow amount update
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={Swap}
              >
                Swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <Input
                label="To"
                amount={convertedAmount}
                currencyOptions={Options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to} // Fixed
                amountDisable={true}
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-800">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
