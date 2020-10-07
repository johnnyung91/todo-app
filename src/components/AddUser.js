import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { USERS_QUERY, ADD_USER } from "../query";

export default function AddUser() {
  const [userName, setUserName] = useState("");
  const [error, setError] = useState();

  const [addUser] = useMutation(ADD_USER, {
    variables: {
      name: userName,
    },
    refetchQueries: (mutationResult) => [{ query: USERS_QUERY }],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addUser()
      setError(undefined)
    }
    catch (err) {
      setError(err.message)
    }
    setUserName("");
  };

  return (
    <div className="container w-25 form py-3">
      <form onSubmit={handleSubmit}>
        <div className="form-group text-center mb-1">
          <label htmlFor="addUserInput">Add A New User</label>
          <input
            type="text"
            className="form-control"
            id="add-user"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter a name"
          />
          {error ? <small className="text-danger">{error}</small> : <br/>}
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
      </form>
    </div>
  );
}
