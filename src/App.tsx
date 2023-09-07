import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import AddTodoForm from "./components/ui/AddTodoForm";
import TodoList from "./components/ui/TodoList";
import {  useAppSelector } from "./redux/store";

function App() {
  const {todoList} =useAppSelector(state=>state)
  console.log(todoList)
  return (
    <>
      <Header />
      <Main childern={<>
      <AddTodoForm/>
      <TodoList todoList={todoList}/>
      </>}

      />
    </>
  );
}

export default App;
