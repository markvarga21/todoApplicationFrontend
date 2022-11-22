import React, { useState, Fragment } from "react";
import "./App.css";
// imitating api call
import data from "./mock-data.json";
import { nanoid } from "nanoid";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";

function App() {
  const [todos, setTodos] = useState(data);
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

    const newTodo = {
      id: nanoid(),
      title: addFormData.title,
      description: addFormData.description,
      date: addFormData.date,
      location: addFormData.location,
    };

    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedTodo = {
      id: editTodoId,
      title: editFormData.title,
      description: editFormData.description,
      date: editFormData.date,
      location: editFormData.location,
    };

    const newTodos = [...todos];

    const index = todos.findIndex((todo) => todo.id === editTodoId);

    newTodos[index] = editedTodo;

    setTodos(newTodos);
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
    const newTodos = [...todos];

    const index = todos.findIndex((todo) => todo.id === todoId);
    newTodos.splice(index, 1);

    setTodos(newTodos);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Date</th>
              <th>Location</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
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
          </tbody>
        </table>
      </form>
      <h2>Add a todo</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="title"
          required="required"
          placeholder="Enter a title..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="description"
          required="required"
          placeholder="Enter a description..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="date"
          required="required"
          placeholder="Enter a date..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="location"
          required="required"
          placeholder="Enter a location..."
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;
