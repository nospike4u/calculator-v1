import "./App.css";
import { useState } from "react";

function App() {
  const [result, setResult] = useState("");  // String to display input and output
  const [firstNum, setFirstNum] = useState(null);  // Stores the first number
  const [operator, setOperator] = useState(null);  // Stores the selected operator
  const [secondNum, setSecondNum] = useState(null);  // Stores the second number

  // Handle number button clicks
  const handleNumClick = (value) => {
    setResult((prevResult) => prevResult + value);
  };

  // Handle operator button clicks (+, -, x, /)
  const handleOperatorClick = (value) => {
    if (result) {
      setFirstNum(parseFloat(result)); // Store the first number
      setOperator(value);  // Store the operator
      setResult("");  // Clear result to get the next number
    }
  };

  // Handle equal button click (=)
  const handleEqualClick = () => {
    if (firstNum !== null && operator && result) {
      setSecondNum(parseFloat(result)); // Store the second number
      let computation;
      const second = parseFloat(result);

      // Perform the calculation based on the operator
      switch (operator) {
        case "+":
          computation = firstNum + second;
          break;
        case "-":
          computation = firstNum - second;
          break;
        case "x":
          computation = firstNum * second;
          break;
        case "/":
          computation = firstNum / second;
          break;
        default:
          return;
      }
      setResult(computation.toString());  // Display the result
      setFirstNum(null);  // Reset first number
      setOperator(null);  // Reset operator
    }
  };

  // Handle clear button (C) click
  const handleClearClick = () => {
    setResult("");  // Clear result
    setFirstNum(null);  // Reset first number
    setOperator(null);  // Reset operator
    setSecondNum(null);  // Reset second number
  };

  // Handle decimal point (.)
  const handleDecimalClick = () => {
    // Append a decimal only if it doesn't already exist in the current input
    if (!result.includes(".")) {
      setResult((prevResult) => prevResult + ".");
    }
  };

  return (
    <>
      <div className="bg-slate-800 h-1/3 w-auto p-7 rounded-lg">
        <div className="bg-blue-300 h-1/3 flex justify-center items-center pb-10 pt-10 rounded">
          {/* Output on screen from user input */}
          <h1 className="text-white">{result || "0"}</h1>
        </div>

        <div className="grid grid-cols-3 gap-4 pt-10 ">
          {/* Number buttons */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
            <button
              key={num}
              onClick={() => handleNumClick(num.toString())}
              className="bg-white p-2 rounded"
            >
              {num}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-6 gap-x-3 pt-10 justify-center items-center">
          {/* Operator buttons */}
          <button
            onClick={() => handleOperatorClick("+")}
            className="bg-white p-2 rounded"
          >
            +
          </button>
          <button
            onClick={() => handleOperatorClick("-")}
            className="bg-white p-2 rounded"
          >
            -
          </button>
          <button
            onClick={() => handleOperatorClick("x")}
            className="bg-white p-2 rounded"
          >
            x
          </button>
          <button
            onClick={() => handleOperatorClick("/")}
            className="bg-white p-2 rounded"
          >
            /
          </button>
          {/* Clear and Equal buttons */}
          <button
            onClick={handleClearClick}
            className="bg-white p-2 rounded"
          >
            C
          </button>
          <button
            onClick={handleEqualClick}
            className="bg-white p-2 rounded"
          >
            =
          </button>
          {/* Decimal button */}
          <button
            onClick={handleDecimalClick}
            className="bg-white p-2 rounded mt-4"
          >
            .
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
