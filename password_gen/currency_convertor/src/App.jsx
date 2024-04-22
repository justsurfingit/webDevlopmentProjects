import { useState } from "react";
import useCurrencyConvertor from "./hooks/useCurrencyConvertor";
import { useEffect } from "react";
import InputBox from "./Components/InputBox";

function App() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");
  const curarray = useCurrencyConvertor(currency);

  const currencyOptions = Object.keys(curarray);
  const [convertedAmount, setConvertedAmount] = useState("");
  function handleswap() {
    // Swap the currencies and amounts
    setCurrency(toCurrency);
    setToCurrency(currency);
    setAmount(convertedAmount); // Set the converted amount as the new amount
    setConvertedAmount(amount); // Set the new amount as the converted amount
  }
  function handleConvert() {
    // console.log("called one");
    const con = curarray[`${toCurrency}`];
    const val = Number(amount * Number(con));
    setConvertedAmount(val);
    // console.log(val);
  }
  const t = 1;
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/935979/pexels-photo-935979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleConvert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                currency={currency}
                amount={amount}
                onCurrencyChange={(currency) => setCurrency(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                currencyOptions={currencyOptions}
                inputDisabled={!t}
                toCurrency={toCurrency}
                setToCurrency={(e) => {
                  setToCurrency(e);
                }}
                handleConvert={() => {
                  handleConvert();
                }}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={handleswap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                currency={toCurrency}
                amount={convertedAmount}
                onCurrencyChange={(e) => setToCurrency(e)}
                onAmountChange={(convertedAmount) =>
                  // console.log('ca')
                  setConvertedAmount(convertedAmount)
                }
                // currencyOptions={currencyOptions}
                inputDisabled={!t}
                currencyOptions={currencyOptions}
                toCurrency={toCurrency}
                setToCurrency={(e) => {
                  setFromCurrency(e);
                }}
                handleConvert={() => {
                  handleConvert();
                }}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default App;
