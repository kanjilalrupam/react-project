import { useState } from "react";
import { TodoProvider } from "./context";
import { Form, TodoItem } from "./components";
import { useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos((prev) => [{ ...todo }, ...prev]);
  };
  // console.log(todos);
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((tod) => (tod.id === id ? todo : tod)));
  };
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, isCompleted: !prevTodo.isCompleted }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos.length > 0) {
      setTodos(todos);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className=" min-h-screen bg-purple-500 py-8 px-4">
        <div className="w-full max-w-2xl mx-auto text-white shadow-md rounded-lg px-4 py-3">
          <h1 className="text-2xl font-semibold text-center my-8 underline underline-offset-4">
            Todo App using local Storage
          </h1>
          <div className="mb-8">
            <Form />
          </div>
          <div className="text-gray-700 flex flex-wrap gap-y-6">
            {todos.map((todo) => {
              return (
                <div key={todo.id} className="w-full">
                  <TodoItem todo={todo} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
