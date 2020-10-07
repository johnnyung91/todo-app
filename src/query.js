import { gql } from "@apollo/client";

export const USERS_QUERY = gql`
  {
    getUsers {
      userId
      name
      todos {
        id
        text
        completed
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation AddUser($name: String!) {
    addUser(name: $name) {
      userId
      name
      todos {
        id
        text
        completed
      }
    }
  }
`;

export const ADD_TODO = gql`
  mutation AddTodo($text: String!, $completed: Boolean!, $assignedId: Int!) {
    addTodo(text: $text, completed: $completed, assignedId: $assignedId) {
      id
      text
      completed
    }
  }
`;

export const COMPLETE_TODO = gql`
  mutation CompleteTodo($id: ID!, $completed: Boolean!) {
    completeTodo(id: $id, completed: $completed) {
      id
      text
      completed
    }
  }
`;

export const DELETE_TODO = gql`
  mutation DeleteTodo($id: ID!) {
    deleteTodo(id: $id) {
      id
      text
      completed
    }
  }
`;

export const UPDATE_TODO = gql`
  mutation UpdateTodo($id: ID!, $text: String!, $completed: Boolean, $assignedId: Int) {
    updateTodo(id: $id, text: $text, completed: $completed, assignedId: $assignedId) {
      id
      text
      completed
    }
  }
`;
