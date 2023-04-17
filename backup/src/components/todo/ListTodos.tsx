import { Todo } from "./TodoApp.type";

type ListTodosProps = {
    todos: Array<Todo>;
    handleTodos : React.Dispatch<Todo[]>
};

const ListTodos = ({ todos }: ListTodosProps) => {
    return (
        <ul>
            {todos.map((item) => (
                <li key={item.id}>{item.body}</li>
            ))}
        </ul>
    );
};
export default ListTodos;
