
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [calc, setCalc] = useState("");
  console.log(calc, "calc");

  const button = [9, 8, 7, 6, 5, 4, 3, 2, 1];
  function calculation(e) {
    const targetValue = e.target.innerText;
    if (targetValue === "=") {
      try {
        const result = eval(calc);
        setCalc(result);
      } catch (error) {
        setCalc("Error");
      }
    } else if (targetValue === "DEL") {
      setCalc("");
    } else {
      setCalc((prevCalc) => prevCalc + targetValue);
    }
  }
  return (
    <div className="App">
      <div className="calculator">
        <div className="calculator_screen">{calc}</div>
        <div className="calculator_operator">
          <button onClick={calculation}>/</button>
          <button onClick={calculation}>*</button>
          <button onClick={calculation}>-</button>
          <button onClick={calculation}>+</button>
          <button onClick={calculation}>DEL</button>
        </div>
        <div className="calculator_digits" onClick={calculation}>
          {button && button.map((value, index) => <button>{value}</button>)}
          <button>0</button>
          <button>.</button>
          <button>=</button>
        </div>
      </div>
    </div>
  );
}

