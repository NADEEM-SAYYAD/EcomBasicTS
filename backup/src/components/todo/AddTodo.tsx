import { useState } from "react";
import { TodoSingle } from "./TodoApp.type";
import { Todo } from "./TodoApp.type";


type AddTodoProps = {
    todos: Array<Todo>;
    handleTodos: (todos: Todo[]) => void;
};

const AddTodo = ({ todos, handleTodos }: AddTodoProps) => {
    const [todo, setTodo] = useState<TodoSingle>({ title: "", body: "" });
    const { title, body } = todo;
    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setTodo({
            ...todo,
            [name]: value,
        });
    };

    const addTodoHandler = () => {
        if (title && body) {
            handleTodos([...todos, { id: `${Date.now()}`, title, body }]);
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Title"
                name="title"
                value={title}
                onChange={(e) => inputHandler(e)}
            />
            <input
                type="text"
                placeholder="Body"
                name="body"
                value={body}
                onChange={(e) => inputHandler(e)}
            />
            <button onClick={addTodoHandler}>Add Todo</button>
        </div>
    );
};
export default AddTodo;
