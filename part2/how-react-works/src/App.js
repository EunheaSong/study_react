import { useState } from "react";

const content = [
  {
    summary: "React is a library for building UIs",
    details:
      "Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    summary: "State management is like giving state a home",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    summary: "We can think of props as the component API",
    details:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

export default function App() {
  return (
    <div>
      <Tabbed content={content} />
    </div>
  );
}

function Tabbed({ content }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="tabs">
        <Tab num={0} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={1} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={2} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={3} activeTab={activeTab} onClick={setActiveTab} />
      </div>

      {activeTab <= 2 ? (
        <TabContent
          item={content.at(activeTab)}
          key={content.at(activeTab).summary}
        />
      ) : (
        <DifferentContent />
      )}
    </div>
  );
}

function Tab({ num, activeTab, onClick }) {
  return (
    <button
      className={activeTab === num ? "tab active" : "tab"}
      onClick={() => onClick(num)}
    >
      Tab {num + 1}
    </button>
  );
}

function TabContent({ item }) {
  const [showDetails, setShowDetails] = useState(true);
  const [likes, setLikes] = useState(0);

  /*
  랜더링이 됨을 확인 해보는 콘솔 로그.
  handleUndo() 를 통해 테스트를 진행하고 있다.
  showDetails 와 likes 가 기본값일 경우 해당 로그는 출력되지 않는 것을 확인할 수 있다.
  -> 변경사항이 없기 때문에 재렌더링을 하지 않기 때문!
  -> console.log(likes) 만 출력된다.
  */

  console.log("RENDER");

  function handleInc() {
    setLikes(likes + 1);
  }

  function hanleTripleInc() {
    /*
     이런 방식은 아무리 많이 set함수를 호출하더라도 +1 밖에 되지 않음. 
     상태값 업데이트가 한 번에 이루어지기 때문에, 
     3번의 setLikes()가 끝나야 likes 의 값이 바뀌기 때문인다.
     결국 3번의 setLikes(likes + 1) 에서 likes 는 모두 기존값일 것.
    */
    // setLikes(likes + 1);
    // setLikes(likes + 1);
    // setLikes(likes + 1);

    // 중요 !!! 기존값을 사용해야하는 경우,
    // 꼭 콜백 함수를 사용해서 업데이트 해주자!
    setLikes((likes) => likes + 1);
    setLikes((likes) => likes + 1);
    setLikes((likes) => likes + 1);
  }

  function handleUndo() {
    setShowDetails(true);
    setLikes(0);
    /*
    상태 업데이트가 비동기로 동작.
    set 함수 이후에 like의 갯수를 조회하면 0 이 나올 것 같지만, 
    초기화 되기 전의 값이 출력되는 것을 확인 할 수 있다. 
    */
    console.log(likes);
  }

  function handleUndoLater() {
    setTimeout(handleUndo, 2000);
  }

  return (
    <div className="tab-content">
      <h4>{item.summary}</h4>
      {showDetails && <p>{item.details}</p>}

      <div className="tab-actions">
        <button onClick={() => setShowDetails((h) => !h)}>
          {showDetails ? "Hide" : "Show"} details
        </button>

        <div className="hearts-counter">
          <span>{likes} ❤️</span>
          <button onClick={handleInc}>+</button>
          <button onClick={hanleTripleInc}>+++</button>
        </div>
      </div>

      <div className="tab-undo">
        <button onClick={handleUndo}>Undo</button>
        <button onClick={handleUndoLater}>Undo in 2s</button>
      </div>
    </div>
  );
}

function DifferentContent() {
  return (
    <div className="tab-content">
      <h4>I'm a DIFFERENT tab, so I reset state 💣💥</h4>
    </div>
  );
}
