import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const today = new Date();
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        Step: {step}
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        Count: {count}
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      {count != 0 ? (
        <p>
          {count} days {count > 0 ? "from today is " : "ago was "}
          {new Date(today.setMonth(today.getDate() + count)).toDateString()}
        </p>
      ) : (
        <p>Today is {new Date().toDateString()}</p>
      )}
    </>
  );
}
