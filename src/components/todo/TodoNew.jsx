const TodoNew =(props)=>{
    console.log(">>> check point:",props)
    const {addNewTodo}=props;
    // addNewTodo("terry")
    return(
        <div className="todo-new">
            <input type="text" placeholder="Enter Your Task" />
            <button>add</button>
        </div>
    );
}
export default TodoNew;