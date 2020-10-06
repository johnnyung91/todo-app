import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos }) {
  return (
    <div>
      <ul className="list-group">
        {todos.map((todo) => (
          <Todo key={todo.todoId} todo={todo} />
        ))}
      </ul>
    </div>
  );
}
