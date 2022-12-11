import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import TodoApplication from "./components/TodoApplication";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Login from "./components/Login";
import Logout from "./components/Logout";

function App() {
  const [accessToken, setAccessToken] = useState("");
  const [userErrorMessage, setUserErrorMessage] = useState("");
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
    setUserInteraction(Math.random());

    const dateString = String(addFormData.date)
      .replace("T", " ")
      .replaceAll("-", ".");

    const jsonTodo = JSON.stringify({
      title: addFormData.title,
      description: addFormData.description,
      date: dateString,
      location: addFormData.location,
    });

    console.log(
      `Access token is empty ${accessToken === ""} and is: ${accessToken}`
    );

    axios
      .post("http://localhost:8080/api/todo/save", jsonTodo, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        console.log(`Recently added data: ${res.data}`);
      })
      .catch((err) => {
        const code = err.response.status;
        if (code === 401) {
          setUserErrorMessage("Login expired! Please log in again.");
          alert("Login expired! Please log in again.t");
        }
      });
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
          Authorization: `Bearer ${accessToken}`,
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
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setUserInteraction(userInteraction * -1);
  };

  // Fetching from database
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/todo/todoItems", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        setTodos(res.data);
        console.log(
          `Refreshing data, because submit was pressed!\nData: ${res.data}`
        );
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div className="app-container">
      <BrowserRouter>
        <Navbar setAccessToken={setAccessToken} />
        <Routes>
          <Route
            path="/"
            element={
              accessToken ? (
                <TodoApplication
                  handleEditFormSubmit={handleEditFormSubmit}
                  editFormData={editFormData}
                  handleEditFormChange={handleEditFormChange}
                  handleCancelClick={handleCancelClick}
                  todos={todos}
                  handleEditClick={handleEditClick}
                  handleDeleteClick={handleDeleteClick}
                  handleAddFormChange={handleAddFormChange}
                  handleAddFormSubmit={handleAddFormSubmit}
                  editTodoId={editTodoId}
                />
              ) : (
                <Login
                  setAccessToken={setAccessToken}
                  accessToken={accessToken}
                />
              )
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route
            path="/login"
            element={
              <Login
                setAccessToken={setAccessToken}
                accessToken={accessToken}
                userErrorMessage={userErrorMessage}
                setUserErrorMessage={setUserErrorMessage}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
