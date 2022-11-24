import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import TodoItem from "./components/TodoItem";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <React.StrictMode>
      {/* <App /> */}
      <TodoItem
        todo={{
          title: "Dishes",
          description: "I have to walk the dog ASAP",
          location: "Debrecen Csapo utca 88",
          date: "2022.12.10 10:20",
        }}
      />
    </React.StrictMode>
  </ChakraProvider>
);
