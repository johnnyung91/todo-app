import React from "react";

export default function Todo({ todo }) {
  return <li className="list-group-item">{todo.text}</li>
}
