import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

/*
    44강 미니 실습 과제
*/

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="유튜브_기본프로필_하늘색.jpg"
      alt="basic_profile"
    ></img>
  );
}

function Intro() {
  return (
    <div>
      <h1>Song</h1>
      <p>Hello, I'm Song. I study web development and React.</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill color="red" name="React" emoji="👍" />
      <Skill color="green" name="JavaScript" emoji="👍" />
      <Skill color="blue" name="TypeScript" emoji="👍" />
    </div>
  );
}

function Skill(props) {
  const style = { backgroundColor: props.color };
  return (
    <div className="skill" style={style}>
      <span>{props.name}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
