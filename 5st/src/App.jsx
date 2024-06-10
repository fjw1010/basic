import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      text: "잠자기",
      completed: true,
    },
    {
      id: 2,
      text: "일찍 일어나기",
      completed: false,
    },
  ]);

  const handleBalueCharge = (event) => {
    setValue(event.target.value);
  }

  const addTodo = (event) => {
    event.preventDefault();
    if (!value) {
      return alert("입력하세요!")
    }
    const newTodo = {
      id: String(Date.now()),
      text: value,
      completed: false,
    }
    setTodoList([newTodo, ...todoList]);
    setValue("")
  }
  const deleteTodo = (id) => {
    const filteredTosoList = todoList.filter((todo) => {
      
    })
  }
  return (
    <div>
      <h1>할 일 목록</h1>
      <form onSubmit={addTodo}>
        <input 
          type="text"
          placeholder="할 일을 추가하세요"
          value={value}
          onChange={handleBalueCharge}
        />
        <button type="submit">추가</button>
      </form>
      <ul>
        {todoList.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
            <button>{todo.completed ? "취소" : "완료"}</button>
            <button>삭제</button>
          </li>
        ))}
        {/* <li style={{ textDecoration: "line-through" }}>
          잠자기
          <button>취소</button>
          <button>삭제</button>
        </li>
        <li>
          일찍 일어나기
          <button>완료</button>
          <button>삭제</button>
        </li> */}
      </ul>
    </div>
  );
}

export default App;
