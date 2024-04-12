export default function Stats({ items }) {
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
