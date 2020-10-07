import React from "react";
import UserList from "./UserList";
import AddUser from "./AddUser";
import AddTodo from "./AddTodo"

function App() {
  return (
    <>
      <AddUser />
      <AddTodo />
      <UserList />
    </>
  );
}

export default App;
