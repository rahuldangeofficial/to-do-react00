import "./App.css";
import Header from "./components/Header/Header";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import { TodoProvider } from "./components/TodoProvider/TodoProvider";

function App() {
  return (
    <>
      <Header />
      <TodoProvider>
        <TodoForm />
        <TodoList />
      </TodoProvider>
    </>
  );
}

export default App;
