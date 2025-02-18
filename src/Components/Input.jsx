import { useId } from 'react';

function Input({
  // eslint-disable-next-line react/prop-types
  label,
  // eslint-disable-next-line react/prop-types
  amount,
  // eslint-disable-next-line react/prop-types
  onAmountChange,
  // eslint-disable-next-line react/prop-types
  onCurrencyChange,
  // eslint-disable-next-line react/prop-types
  currencyOptions = [],  // ✅ Added default value to prevent undefined error
  // eslint-disable-next-line react/prop-types
  selectCurrency = "USD", // ✅ Added default value
  // eslint-disable-next-line react/prop-types
  amountDisable = false, // ✅ Added default value
  // eslint-disable-next-line react/prop-types
  currencyDisable = false, // ✅ Added default value
  // eslint-disable-next-line react/prop-types
  className = "", // ✅ Added default value
}) {
  const AmountInputId = useId();

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label htmlFor={AmountInputId} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={AmountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}> 
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Input;
