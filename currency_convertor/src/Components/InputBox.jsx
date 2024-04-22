function handleit(setval, val, callback, oncur, cur) {
  setval(val);
  callback();
  oncur(cur);
}
function InputBox({
  label,
  // these are basically the value which will be passed on as prop to our function and we can utilize them
  amount,
  onAmountChange,
  currency,
  onCurrencyChange,
  currencyOptions = [],
  className = "",
  inputDisabled = false,
  handleConvert,
}) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block">{label}</label>
        <input
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => onAmountChange(e.target.value)}
          //   onChange={(e) =>
          //     handleChange(onAmountChange, setToCurrency, amount, ToCurrency)
          //   }
          //   this is beautiful concept here && is used to avoid error when onAmountChange is called is not passed by user
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">{currency}</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          //   disabled={inputDisabled}
          value={currency}
          onChange={(e) =>
            handleit(
              onCurrencyChange,
              currency,
              handleConvert,
              onCurrencyChange,
              e.target.value
            )
          }
        >
          {currencyOptions.map((cur) => (
            <option value={cur} key={cur}>
              {cur}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
