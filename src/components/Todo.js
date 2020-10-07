import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { COMPLETE_TODO, DELETE_TODO, UPDATE_TODO, USERS_QUERY } from "../query";
import Modal from "react-modal";
import { customStyles } from "../styles/modalStyles";
import classNames from "classnames";

Modal.setAppElement("#root");

export default function Todo({ todo }) {
  const { id, text, completed } = todo;
  console.log(todo);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [newUserId, setNewUserId] = useState(1);
  const [editTodo, setEditTodo] = useState(text);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const [completeTodo] = useMutation(COMPLETE_TODO, {
    variables: {
      id,
      completed: !completed,
    },
    refetchQueries: (mutationResult) => [{ query: USERS_QUERY }],
  });

  const [deleteTodo] = useMutation(DELETE_TODO, {
    variables: {
      id,
    },
    refetchQueries: (mutationResult) => [{ query: USERS_QUERY }],
  });

  const [updateTodo] = useMutation(UPDATE_TODO, {
    variables: {
      id,
      text: editTodo,
      assignedId: parseInt(newUserId)
    },
    refetchQueries: (mutationResult) => [{ query: USERS_QUERY }]
  })

  const { loading, error, data } = useQuery(USERS_QUERY);
  if (loading) return <div>Fetching</div>;
  if (error) return <div>Error</div>;

  const { getUsers: users } = data;


  const editSubmit = (e) => {
    e.preventDefault();
    updateTodo();
    closeModal();
  };

  const todoClassName = classNames("form-check-label", { "strike-through": completed });

  return (
    <>
      <li className="list-group-item todo-item">
        <div className="form-check">
          <input type="checkbox" className="form-check-input" checked={completed} onChange={completeTodo} />
          <label className={todoClassName}>{text}</label>
        </div>
        <div>
          <i className="fas fa-edit text-warning pointer mr-2" onClick={openModal} />
          <i className="fas fa-trash text-muted pointer" onClick={deleteTodo} />
        </div>
      </li>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} todo={todo}>
        <div className="text-center position-relative">
          <h2>Edit Todo</h2>
          <i onClick={closeModal} className="modal-close fas fa-times-circle pointer" />
          <form onSubmit={editSubmit}>
            <div className="form-group text-center">
              <input
                type="text"
                className="form-control"
                value={editTodo}
                onChange={(e) => setEditTodo(e.target.value)}
                placeholder="Enter Todo"
              />
            </div>
            <h2>Reassign?</h2>
            <div className="form-group">
              <select value={newUserId} onChange={(e) => setNewUserId(e.target.value)}>
                {users.map((user) => {
                  return (
                    <option key={user.userId} value={user.userId}>
                      {user.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Submit
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
}
