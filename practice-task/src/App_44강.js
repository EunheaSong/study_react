/*
    44강 미니 실습 과제
    55강 미니 실습 과제
*/

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

export default function App_44강() {
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
      {skills.map((skill) => (
        <Skill skill={skill} key={skill.skill} />
      ))}
    </div>
  );
}

function Skill({ skill }) {
  const style = { backgroundColor: skill.color };
  return (
    <div className="skill" style={style}>
      <span>{skill.skill}</span>
      <span>
        {skill.level === "beginner" && "👶"}
        {skill.level === "intermediate" && "👍"}
        {skill.level === "advanced" && "💪"}
      </span>
    </div>
  );
}
