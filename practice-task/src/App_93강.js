import { useState } from "react";
import "./styles.css";

// 93강 미니 실습 과제

//my self version
// export default function App() {
//   const [pay, setPay] = useState("");
//   const [myTip, setMyTip] = useState(0);
//   const [friendTip, setFriendTip] = useState(0);

//   let tip = (pay * ((myTip + friendTip) / 2)) / 100;

//   function reset() {
//     setPay("");
//     setMyTip(0);
//     setFriendTip(0);
//   }

//   return (
//     <div>
//       <span>How much was the bill?</span>
//       <input
//         type="text"
//         placeholder="Bill value"
//         value={pay}
//         onChange={(e) => setPay(Number(e.target.value))}
//       />

//       <Service tip={tip} onTip={setMyTip}>
//         How did you like the service?
//       </Service>
//       <Service tip={tip} onTip={setFriendTip}>
//         how did your friend like the service?
//       </Service>

//       {(pay !== "" || tip !== 0) && (
//         <h3>
//           You pay ${pay + tip} ({`$${pay} + $${tip} tip`})
//         </h3>
//       )}

//       <button onClick={reset}>Reset</button>
//     </div>
//   );
// }

// function Service({ tip, onTip, children }) {
//   return (
//     <div>
//       <span>{children}</span>
//       <select onChange={(e) => onTip(Number(e.target.value))}>
//         <option value="0">Dissatisfied (0%)</option>
//         <option value="5">It was okay (5%)</option>
//         <option value="10">It was good (10%)</option>
//         <option value="20">Absolutely amazing! (20%)</option>
//       </select>
//     </div>
//   );
// }

// 강의 버전
export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = (bill * ((percentage1 + percentage2) / 2)) / 100;

  function handleRestet() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
        How did your friend like the service?
      </SelectPercentage>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleRestet} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      ></input>
    </div>
  );
}

function SelectPercentage({ percentage, onSelect, children }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <p>
      You pay ${bill + tip} (${bill} + ${tip} tip)
    </p>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
