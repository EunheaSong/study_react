import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: true },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
// ];

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    //useState 가 const 로 선언되어있기 때문에 items 안에 add 하는 행위는 할 수 없다.
    //새 배열을 만들어서 대체해주어야한다.
    setItems((items) => [...items, item]);
  }

  function handleDeletedItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) => (item.id === id ? { ...item, packed: true } : item))
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeletedItems={handleDeletedItems}
        onToggleItems={handleToggleItem}
      />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🏝️ Far Away 🧳</h1>;
}

function Form({ onAddItems }) {
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

function PackingList({ items, onDeletedItems, onToggleItems }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            onDeletedItems={onDeletedItems}
            onToggleItems={onToggleItems}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onDeletedItems, onToggleItems }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.checked}
        onChange={() => onToggleItems(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeletedItems(item.id)}>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <div className="stats">
      🌴 You have X items on your list, and you already packed X (X%)
    </div>
  );
}
