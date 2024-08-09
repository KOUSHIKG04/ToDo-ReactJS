import { useState, useEffect } from "react";
import CreateTodo from "./components/CreateTodo";
import { Todos } from "./components/Todos";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  /*
  useEffect(() => {
    fetch("http://localhost:3000/todos").then(async (res) => {
      const json = await res.json();
      setTodos(json.todos);
    });
  }, []);
  */

  useEffect(() => {
    setInterval(fetchData, 10000);
  }, []);

  const fetchData = async () => {
    const response = await fetch("http://localhost:3000/todos");
    const json = await response.json();
    setTodos(json.todos);
  };

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
