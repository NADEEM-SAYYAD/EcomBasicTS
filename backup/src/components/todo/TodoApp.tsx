import { useState } from "react";
import AddTodo from "./AddTodo";
import ListTodos from "./ListTodos";
import { Todo } from "./TodoApp.type";

const TodoApp = () => {
    const [todos, setTodos] = useState<Todo[]>([
        {
            id: "1",
            title: "First Todo",
            body: "My First Todo description will go here",
        },
        {
            id: "2",
            title: "Learning Typescript",
            body: "Learning typescipt from Codeevoloution",
        },
    ]);
    return (
        <div>
            <h2>Todo APP</h2>
            <AddTodo todos={todos} handleTodos={setTodos}/>
            <ListTodos todos={todos} handleTodos={setTodos}/>
        </div>
    );
};
export default TodoApp;
