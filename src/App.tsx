import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import AddTodoForm from "./components/ui/AddTodoForm";
import TodoList from "./components/ui/TodoList";

function App() {

  return (
    <>
      <Header />
      <Main childern={<>
      <AddTodoForm/>
      <TodoList />
      </>}

      />
    </>
  );
}

export default App;
