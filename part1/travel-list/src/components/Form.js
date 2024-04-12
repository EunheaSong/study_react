import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return; //false 가 될 수 있는 값 : "", 0, false

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        //   onChange={(e) => setQuantity(e.target.value)}
        // target.value는 String 으로 반환되기 때문에 숫자가 문자열로 변환된다.
        // 숫자를 사용할 것이라면 두 가지 방법을 사용할 수 있다.
        // 문자열로 만들때 "" + 를 추가해주는 것 처럼 + 를 사용할 수 있고,
        // js 의 Number() 를 사용할 수도 있다. 더 명시적으로 표현하기 위해 Number() 사용하도록 하자.
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => (
          <option value={i} key={i}>
            {i}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
