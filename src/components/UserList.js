import React from "react";
import { useQuery } from "@apollo/client";
import User from "./User";
import { USERS_QUERY } from "../query";


export default function UserList() {
  const { loading, error, data } = useQuery(USERS_QUERY);
  if (loading) return <div>Fetching</div>;
  if (error) {
    console.log(error);
    return <div>Error</div>;
  }
  const { getUsers: users } = data;

  return (
    <>
      <div className="container">
        <div className="row py-5">
          {users.map((user) => (
            <User key={user.userId} user={user} />
          ))}
        </div>
      </div>
    </>
  );
}
