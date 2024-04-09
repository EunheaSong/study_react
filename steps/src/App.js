import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  //BAD example
  // const [test] = useState({ name: "Test" });

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);

    //BAD example
    // test.name = "Change";
  }

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }

  return (
    <>
      <div className="close" onClick={() => setIsOpen((is) => !is)}>
        &times; {/* HTML 특수문자 코드 */}
      </div>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <Message step={step}>
            {messages[step - 1]}
            <div className="buttons">
              <Button
                bgColor="#e7e7e7"
                textColor="#333"
                onClick={() => alert(`Learn how to ${messages[step - 1]}`)}
              >
                Learn now
              </Button>
            </div>
          </Message>
          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>👈</span> Previous
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

/*
참고!!
onMouseEnter={alert("!!!!!!!!")} 이런 식으로 작성한다면 App()이 호출되자마자 해당 이벤트에 있는 함수가 실행된다. 
  onMouseEnter={()=> alert("!!!!!!!!")} 이렇게 작성해주어야 마우스가 올라갔을때 이벤트가 발생된다.
  {} 안에서는 함수를 즉시 호출하고, ()=> 은 인자를 받는다는 의미이다.
  따라서, 이벤트가 인자 값으로 들어온 뒤 함수를 실행하라는 의미로 쓰이게된다.

  만들어놓은 함수를 가져와서 사용할때에는
  onClick={testFunction()} 이렇게 작성하면 testFunction이 바로 실행된다. 
  onClick={testFunction} 이렇게 작성해야한다.
  onClick={()=> testFunction()} 이렇게도 작성할 수 있다. 하지만 코드가 길어지니 위 처럼 작성하자. 
*/
/*
children props 사용!!!!
리액트에 정의되어있으므로 별다른 작업 없이, 그냥 파라미터에 children 을 입력하고 사용하면 된다.
해당 컴포넌트의 하위에 있는 항목이 그대로 입력된다.
-> <Button>이 안에 있는 것들이 전부 children 이 됨!</Button>
*/
function Button({ bgColor, textColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function Message({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}
