import React from "react";

export function Todos({ todos }) {
  return (
    <>
      {todos.map((todo, index) => {
        return (
          <div key={index}>
            <h3>{todo.title}</h3>
            <p>{todo.content}</p>
            <button>
              {todo.completed ? "Completed" : "Mark as completed"}
            </button>
          </div>
        );
      })}
    </>
  );
}
