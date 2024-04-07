import { useState } from "react";
import "./styles_68_79강.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [range, setRange] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);
  function handleReset() {
    setRange(1);
    setCount(0);
  }
  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={range}
          onChange={(e) => setRange(Number(e.target.value))}
        />
        {range}
      </div>
      <div>
        <button onClick={() => setCount((num) => num - range)}>-</button>
        <input
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((num) => num + range)}>+</button>
      </div>
      <p>
        {count}
        {count === 0 ? (
          <span> Today is </span>
        ) : count < 0 ? (
          <span> ago was </span>
        ) : (
          <span> days from today is </span>
        )}
        {date.toDateString()}
      </p>
      {count !== 0 || range !== 1 ? (
        <button onClick={handleReset}>Reset</button>
      ) : null}
    </div>
  );
}
