import "./components/todo/todo.css"
import TodoNew from "./components/todo/TodoNew";
import TodoData from "./components/todo/TodoData";
import ReactPhoto from "./assets/react.svg"
const App = () => {
  const hoidanit = "Terry MU";
  const age = 25;
  const data ={
    address:"hanoi",
    country:"vietnam"
  }
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew/>
      <TodoData
      name={hoidanit}
      age = {age}
      data={data}
      />
      <div className="todo-image">
        <img src={ReactPhoto} className="logo"/>
      </div>
    </div>
  );
}

export default App
