import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import "./App.css";
import { Box, HStack } from "@chakra-ui/react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import EditableTodoitem from "./components/EditableTodoitem";

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
    </div>
  );
}

export default App;
