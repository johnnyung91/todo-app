import React from "react";
import Todo from "./Todo";


export default function TodoList({ todos }) {
  const todosList = todos.length ? todos.map((todo) => <Todo key={todo.id} todo={todo} />) : <EmptyList />;

  return (
    <div>
      <ul className="list-group">{todosList}</ul>
    </div>
  );
}

function EmptyList() {
  return (
    <li className="list-group-item todo-item">
      <h6>This person has nothing to do</h6>
    </li>
  );
}
