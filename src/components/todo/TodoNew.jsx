const TodoNew =(props)=>{
    console.log(">>> check point:",props)
    const {addNewTodo}=props;
    // addNewTodo("terry")
    const handleClick = ()=>{
        alert("click me")
    }
    const handleOnChange=(name)=>{
        console.log(">>> handleOnChange",name)
    }
    return(
        <div className="todo-new">
            <input type="text" placeholder="Enter Your Task" onChange={(event)=>handleOnChange(event.target.value)} />
            <button onClick={handleClick}>add</button>
        </div>
    );
}
export default TodoNew;