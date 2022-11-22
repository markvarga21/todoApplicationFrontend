import React from "react";

const ReadOnlyRow = ({ todo, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{todo.title}</td>
      <td>{todo.description}</td>
      <td>{todo.date}</td>
      <td>{todo.location}</td>
      <td>
        <button type="button" onClick={(event) => handleEditClick(event, todo)}>
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(todo.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
