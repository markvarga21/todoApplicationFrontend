import { Box, Flex, Grid } from "@chakra-ui/react";
import React from "react";
import TodoItem from "./TodoItem";

const TodoItemList = ({ todos }) => {
  return (
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
        <TodoItem todo={todo} />
      ))}
    </Box>
  );
};

export default TodoItemList;
