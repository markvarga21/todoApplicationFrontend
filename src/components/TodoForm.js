import {
  Box,
  Button,
  FormControl,
  Heading,
  Input,
  Stack,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const TodoForm = ({ handleAddFormChange, handleAddFormSubmit }) => {
  const submitClicked = (event) => {
    event.preventDefault();
    console.log("Submit clicked!");
  };
  return (
    <form onSubmit={handleAddFormSubmit}>
      <VStack spacing={3} width={500} align="stretch">
        <FormControl isRequired>
          <Box p={25} shadow="2xl" borderRadius={8} backgroundColor="white">
            <Heading>Add a todo</Heading>
            <Stack>
              <Input
                variant="outline"
                type="text"
                name="title"
                required="required"
                placeholder="Enter a title..."
                onChange={handleAddFormChange}
              />
              <Input
                variant="outline"
                type="text"
                name="description"
                required="required"
                placeholder="Enter a description..."
                onChange={handleAddFormChange}
              />
              <Input
                variant="outline"
                type="datetime-local"
                name="date"
                required="required"
                placeholder="Enter a date..."
                onChange={handleAddFormChange}
              />
              <Input
                variant="outline"
                type="text"
                name="location"
                required="required"
                placeholder="Enter a location..."
                onChange={handleAddFormChange}
              />
              <Button type="submit" colorScheme="blue">
                Add
              </Button>
            </Stack>
          </Box>
        </FormControl>
      </VStack>
    </form>
  );
};

export default TodoForm;
