import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./App";
import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}

    {/* -[실습 예제] props를 이용해, 재사용성이 높은 컴포넌트 만들기 -  */}
    <StarRating maxRating={10} />
    <StarRating
      maxRating={5}
      color="red"
      message={["One", "Two", "Three", "Four", "Five"]}
    />
    <Test />
  </React.StrictMode>
);

function Test() {
  const [movieRating, setMovieRationg] = useState(0);
  return (
    <div>
      <StarRating maxRating={10} color="blue" onSetRating={setMovieRationg} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}
