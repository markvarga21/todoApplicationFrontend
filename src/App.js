import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import "./App.css";
// imitating api call
import { nanoid } from "nanoid";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";
import {
  Button,
  Input,
  FormControl,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  VStack,
  Box,
} from "@chakra-ui/react";

function App() {
  const [userInteraction, setUserInteraction] = useState(-1);
  const [todos, setTodos] = useState([]);
  const [addFormData, setAddFormData] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
  });
  const [editFormData, setEditFormData] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = {
      ...addFormData,
    };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = {
      ...editFormData,
    };
    newFormData[fieldName] = fieldValue;
    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    // here you should replace with sending a POST request to the API and remove the preventDefault() method call
    event.preventDefault();

    const jsonTodo = JSON.stringify({
      title: addFormData.title,
      description: addFormData.description,
      date: addFormData.date,
      location: addFormData.location,
    });

    axios
      .post("http://localhost:8080/api/todo/save", jsonTodo, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(`Recently added data: ${res.data}`);
      })
      .catch((err) => console.log(err));
    setUserInteraction(userInteraction * -1);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    const jsonTodo = JSON.stringify({
      title: editFormData.title,
      description: editFormData.description,
      date: editFormData.date,
      location: editFormData.location,
    });

    axios
      .put(`http://localhost:8080/api/todo/update?id=${editTodoId}`, jsonTodo, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    setUserInteraction(userInteraction * -1);
    setEditTodoId(null);
  };

  const [editTodoId, setEditTodoId] = useState(null);
  const handleEditClick = (event, todo) => {
    event.preventDefault();
    setEditTodoId(todo.id);

    const formValues = {
      title: todo.title,
      description: todo.description,
      date: todo.date,
      location: todo.location,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditTodoId(null);
  };

  const handleDeleteClick = (todoId) => {
    axios
      .delete("http://localhost:8080/api/todo/delete", {
        params: {
          id: todoId,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setUserInteraction(userInteraction * -1);
  };

  // Fetching from database
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/todo/todoItems")
      .then((res) => {
        setTodos(res.data);
        console.log(
          `Refreshing data, because submit was pressed!\nData: ${res.data}`
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userInteraction]);

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <Table size="md" colorScheme="linkedin" variant="striped">
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th>Description</Th>
              <Th>Date</Th>
              <Th>Location</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {todos.map((todo) => (
              <Fragment>
                {editTodoId === todo.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    todo={todo}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </Tbody>
        </Table>
      </form>
      <form onSubmit={handleAddFormSubmit}>
        <VStack spacing={3} width={500} align="stretch">
          <FormControl isRequired>
            <Box p={5} shadow="2xl" borderRadius={8}>
              <Heading>Add a todo</Heading>
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
                type="text"
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
            </Box>
          </FormControl>
        </VStack>
      </form>
    </div>
  );
}

export default App;
