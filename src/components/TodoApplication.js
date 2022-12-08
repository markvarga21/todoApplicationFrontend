import { Box, HStack } from "@chakra-ui/react";
import React, { Fragment } from "react";
import EditableTodoitem from "./EditableTodoitem";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const TodoApplication = ({
  handleEditFormSubmit,
  editFormData,
  handleEditFormChange,
  handleCancelClick,
  todos,
  handleEditClick,
  handleDeleteClick,
  handleAddFormChange,
  handleAddFormSubmit,
  editTodoId,
}) => {
  return (
    <HStack spacing={250}>
      <form onSubmit={handleEditFormSubmit}>
        <Box
          width={400}
          height={880}
          display="block"
          overflowY="scroll"
          sx={{
            "&::-webkit-scrollbar": {
              width: "16px",
              borderRadius: "5px",
              backgroundColor: `rgba(0, 0, 0, 0.05)`,
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: `rgba(0, 0, 0, 0.05)`,
            },
          }}
        >
          {todos.map((todo) => (
            <Fragment>
              {editTodoId === todo.id ? (
                <EditableTodoitem
                  editFormData={editFormData}
                  handleEditFormChange={handleEditFormChange}
                  handleCancelClick={handleCancelClick}
                />
              ) : (
                <TodoItem
                  todo={todo}
                  handleEditClick={handleEditClick}
                  handleDeleteClick={handleDeleteClick}
                />
              )}
            </Fragment>
          ))}
        </Box>
      </form>
      <TodoForm
        handleAddFormChange={handleAddFormChange}
        handleAddFormSubmit={handleAddFormSubmit}
      />
    </HStack>
  );
};

export default TodoApplication;
