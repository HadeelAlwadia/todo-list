import { TodoProperty } from "../../../redux/module/todoListSlice"
import Todo from "../Todo"

 const TodoList = ({todoList}:{todoList:TodoProperty[]}) => {
  return (
    <div>
      {todoList?todoList.map(todo=><Todo key={todo.id} {...todo}/>):<div>no have any product</div>}
    </div>
  )
}
export default TodoList
