import {
  Box,
  Button,
  FormControl,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const TodoForm = () => {
  return (
    <form>
      <VStack spacing={3} width={500} align="stretch">
        <FormControl isRequired>
          <Box p={5} shadow="2xl" borderRadius={8} backgroundColor="white">
            <Heading>Add a todo</Heading>
            <Input
              variant="outline"
              type="text"
              name="title"
              required="required"
              placeholder="Enter a title..."
            />
            <Input
              variant="outline"
              type="text"
              name="description"
              required="required"
              placeholder="Enter a description..."
            />
            <Input
              variant="outline"
              type="text"
              name="date"
              required="required"
              placeholder="Enter a date..."
            />
            <Input
              variant="outline"
              type="text"
              name="location"
              required="required"
              placeholder="Enter a location..."
            />
            <Button type="submit" colorScheme="blue">
              Add
            </Button>
          </Box>
        </FormControl>
      </VStack>
    </form>
  );
};

export default TodoForm;
