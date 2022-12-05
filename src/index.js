import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider, HStack } from "@chakra-ui/react";
import TodoItem from "./components/TodoItem";
import TodoItemList from "./components/TodoItemList";
import TodoForm from "./components/TodoForm";
import EditableTodoitem from "./components/EditableTodoitem";

const root = ReactDOM.createRoot(document.getElementById("root"));

const todos = [
  {
    title: "Dishes",
    description: "I have to walk the dog ASAP",
    location: "Debrecen Csapo utca 88",
    date: "2022.12.10 10:20",
  },
  {
    title: "Dishes",
    description: "I have to walk the dog ASAP",
    location: "Debrecen Csapo utca 88",
    date: "2022.12.10 10:20",
  },
  {
    title: "Dishes",
    description: "I have to walk the dog ASAP",
    location: "Debrecen Csapo utca 88",
    date: "2022.12.10 10:20",
  },
  {
    title: "Dishes",
    description: "I have to walk the dog ASAP",
    location: "Debrecen Csapo utca 88",
    date: "2022.12.10 10:20",
  },
  {
    title: "Dishes",
    description: "I have to walk the dog ASAP",
    location: "Debrecen Csapo utca 88",
    date: "2022.12.10 10:20",
  },
];

root.render(
  <ChakraProvider>
    <React.StrictMode>
      {/* <App /> */}
      {/* <HStack spacing={250}>
        <TodoItemList todos={todos} />
        <TodoForm />
      </HStack> */}
      <EditableTodoitem />
    </React.StrictMode>
  </ChakraProvider>
);
