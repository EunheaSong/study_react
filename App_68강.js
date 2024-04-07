import { useState } from "react";

export default function App_68강() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  const today = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <p>
        {count === 0 ? (
          <span>Today is {today.toDateString()}</span>
        ) : (
          <span>
            {count} days {count > 0 ? "from today is " : "ago was "}
            {today.toDateString()}
          </span>
        )}
      </p>
    </div>
  );
}
