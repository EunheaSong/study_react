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
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
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
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
