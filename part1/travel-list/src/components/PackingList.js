import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onDeletedItems,
  onToggleItems,
  onClearItems,
}) {
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
