import { Button, Td, Tr } from "@chakra-ui/react";
import React from "react";

const ReadOnlyRow = ({ todo, handleEditClick, handleDeleteClick }) => {
  return (
    <Tr>
      <Td>{todo.title}</Td>
      <Td>{todo.description}</Td>
      <Td>{todo.date}</Td>
      <Td>{todo.location}</Td>
      <Td>
        <Button type="button" onClick={(event) => handleEditClick(event, todo)}>
          Edit
        </Button>
        <Button type="button" onClick={() => handleDeleteClick(todo.id)}>
          Delete
        </Button>
      </Td>
    </Tr>
  );
};

export default ReadOnlyRow;
