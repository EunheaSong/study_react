import "./styles_89강.css";
import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

/*
    89강 미니 실습 과제
    92강 미니 실습 과제 - 하나의 카드만 열리도록 변경 & children prop 사용
*/

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [isOpen, setIsOpen] = useState(null);
  // 내가 혼자 했던 방식. 강의에선 AccordionItem 안에 함수를 만듦.
  // function handleOpen(title) {
  //   if (isOpen === title) {
  //     setIsOpen(null);
  //     return;
  //   }
  //   setIsOpen(title);
  // }
  return (
    <div className="accordion">
      {data.map((item, i) => (
        <AccordionItem
          title={item.title}
          index={i}
          key={item.title}
          curOpen={isOpen}
          onOpen={setIsOpen}
        >
          {item.text}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ title, index, curOpen, onOpen, children }) {
  const isOpen = curOpen === index;

  function handleOpen() {
    onOpen(isOpen ? null : index);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleOpen}>
      <span className="number">{index < 9 ? `0${index + 1}` : index + 1}</span>
      <p className="title">{title}</p>
      <p className="icon">+</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
