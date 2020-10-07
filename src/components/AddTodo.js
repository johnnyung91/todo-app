import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { USERS_QUERY, ADD_TODO } from "../query";
import Modal from "react-modal";
import {customStyles} from '../styles/modalStyles'

Modal.setAppElement("#root");

export default function AddTodo() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [userId, setUserId] = useState(1);
  const [todo, setTodo] = useState("");

  const [addTodo] = useMutation(ADD_TODO, {
    variables: {
      text: todo,
      completed: false,
      assignedId: parseInt(userId)
    },
    refetchQueries: mutationResult => [{query: USERS_QUERY}]
  });

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo()
    closeModal()
  }

  const { loading, error, data } = useQuery(USERS_QUERY);
  if (loading) return <div>Fetching</div>;
  if (error) {
    console.log(error);
    return <div>Error</div>;
  }
  const { getUsers: users } = data;

  return (
    <div>
      <div className="container w-25">
        <button onClick={openModal} className="btn btn-secondary btn-block">
          Make A New Todo
        </button>
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
        <div className="text-center position-relative">
          <h2>Hello!</h2>
          <i onClick={closeModal} className="modal-close fas fa-times-circle pointer"/>
          <h4>Add A New Todo and Assign it to Someone!</h4>
          <form onSubmit={handleSubmit}>
            <div className="form-group text-center">
              <input
                required
                type="text"
                className="form-control"
                id="add-todo"
                onChange={e => setTodo(e.target.value)}
                placeholder="Enter Todo" />
            </div>
            <div className="form-group">
              <select value={userId} onChange={(e) => setUserId(e.target.value)}>
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
    </div>
  );
}
