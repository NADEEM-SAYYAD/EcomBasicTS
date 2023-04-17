import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import TodoApp from "./components/todo/TodoApp";
//import PropsApp from "./components/props/PropsApp";
//import StateApp from "./components/state/StateApp";
//import ContextApp from "./components/context/ContextApp";
//import { CounterProvider } from "./components/context/CounterContext";
//import ReducerApp from "./components/reducer/ReducerApp";
//import { App } from "./components/context/App";
//import { ContextProvider } from "./components/context/Admin";
import { App } from "./context_red/App";
const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(<App />);
