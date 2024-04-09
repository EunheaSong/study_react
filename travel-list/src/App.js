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
      items.map((item) =>
        //map을 돌면서 id 가 같은게 나오면, 지금까지 돈 item 리스트 뒤로 붙일껀데, packed를 변경해서 붙여라.
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearItems() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeletedItems}
        onToggleItems={handleToggleItem}
        onClearItems={handleClearItems}
      />
      <Stats items={items} />
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

function PackingList({ items, onDeletedItems, onToggleItems, onClearItems }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;
  else if (sortBy === "description")
    sortedItems = items
      .slice() //원본 배열에 영향을 주지 않도록, slice()하여 배열을 복사하고 새배열을 사용한다.
      .sort((a, b) => a.description.localeCompare(b.description));
  else if (sortBy === "packed")
    sortedItems = items
      .slice() //true : 1, false : 0 이다.
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  else sortedItems = [];

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItems={onDeletedItems}
            onToggleItems={onToggleItems}
            key={item.id}
          />
        ))}
      </ul>
      <div className="actions">
        {/* select와 옵션은 짝꿍! */}
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">SORT BY INPUT ORDER</option>
          <option value="description">SORT BY DESCRIPTION</option>
          <option value="packed">SORT BY PACKED STATUS</option>
        </select>
        <button onClick={onClearItems}>Clear List</button>
      </div>
    </div>
  );
}

function Item({ item, onDeleteItems, onToggleItems }) {
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
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}

function Stats({ items }) {
  //목록이 없을 경우, 정렬할 필요가 없기때문에 불필요한 작업을 하지 않도록하며
  //UI적으로도 보기 좋게 메시지를 전달.
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding sone items to your packing list 🚀</em>
      </footer>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  // 소숫점을 제거하기 위해 Math.round()를 사용해준다.
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      {percentage === 100 ? (
        <em>You got everything! Ready to go ✈️</em>
      ) : (
        <em>
          🌴 You have {numItems} items on your list, and you already packed
          {numPacked} ({percentage}%)
        </em>
      )}
      {/* 또는 
      <em>
         {percentage === 100
            ? "You got everything! Ready to go ✈️"
            : `🌴 You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`
         }
      </em>
      이렇게도 할 수 있다.
      */}
    </footer>
  );
}
