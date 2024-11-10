// import { Button } from 'react-bootstrap';
import "./components/todo/todo.css"
import TodoNew from "./components/todo/TodoNew";
import TodoData from "./components/todo/TodoData";
import ReactPhoto from "./assets/react.svg"
// import NavBar from './components/AP/NavBar';
// import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  const hoidanit = "Terry MU";
  const age = 25;
  const data ={
    address:"hanoi",
    country:"vietnam"
  }
  const addNewTodo = (name)=>{
    alert(`call me ${name}`)
  }
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
      addNewTodo={addNewTodo}
      />
      <TodoData
      name={hoidanit}
      age = {age}
      data={data}
      />
      <div className="todo-image">
        <img src={ReactPhoto} className="logo"/>
      </div>
      {/* <NavBar/> */}
    </div>
  );
}

export default App
