import React from "react";
import TodoList from "./TodoList"

export default function User(props) {
  const { name, todos } = props.user;

  return (
    <div className="col-lg-4">
      <div className="card mb-4">
        <div className="d-flex justify-content-center">
          <h3>{name}</h3>
        </div>
        <TodoList todos={todos} />
      </div>
    </div>
  );
}
