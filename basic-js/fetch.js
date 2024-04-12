fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => console.log(data));

console.log("Hello~~");

/*
 자바스크립트에서 API 통신을 할때에는 비동기 통신을 하기 때문에 상단에 기입된 fetch 보다 Hello~~ 문자열이 더 먼저 출력됨을 확인 할 수 있다. 
 fetch 를 사용해서 응답값을 받을 때, Promise 라는 것이 반환이 되고 Promise 는 비동기 작업을 처리하기 위한 개체이다.
 .then() 
 .catch()
 .all() 
 등의 함수를 사용하여 비동기 작업에 대한 처리를 이행할 수 있다.
*/

/*
 await 키워드 : 바로 다음 줄로 넘어가지 않고, 응답이 올때까지 대기시켜주는 키워드.
 원래 대로 라면 "기다리는 중입니다" 문자열이 data 보다 먼저 출력되겠지만, await 를 사용해주고 있기때문에 순서대로 진행이 됨을 확인할 수 있다.
*/
async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
  console.log("기다리는 중입니다");
  return data;
}

const todos = getTodos();
console.log(todos);

console.log("Hello~~");
