import React, { useState } from "react";
 

const style = {
  padding: "10px",
  margin: "10px",
  borderRadius: "10px",
};

function CreateTodo() {
  const [todo, setTodo] = useState({
    title: "",
    content: ""
  });

  function handleInput(e) {
    const { name, value } = e.target;
    setTodo((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div>
      <input
        name="title"
        style={style}
        type="text"
        placeholder="Title"
        onChange={handleInput}
        value={todo.title}
      />
      <br />
      <textarea
        name="content"
        style={style}
        placeholder="Take your note..."
        rows={3}
        cols={50}
        onChange={handleInput}
        value={todo.content}
      />
      <br />
      <button
        style={style}
        onClick={() => {
          // Capture the current state values before resetting the state
          const currentTodo = {
            title: todo.title,
            content: todo.content,
          };

          fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify(currentTodo),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then(async (res) => {
              const json = await res.json();
              alert("TODO ADDED");
            })
            .catch((error) => {
              console.error("Error:", error);
            });

          // Reset the state
          setTodo({
            title: "",
            content: "",
          });
        }}
      >
        Add
      </button>
    </div>
  );
}

export default CreateTodo;
