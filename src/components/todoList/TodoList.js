import { useState } from "react";

import TodoItem from "./TodoItem";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    const handleChange = event => setInput(event.target.value);

    const handleAddTodo = () => {
        const trimmed = input.trim();
        if (!trimmed) return;

        const newTodo = {
            id: Date.now(),
            text: input,
            completed: false,
        }

        setTodos(prevTodos => [...prevTodos, newTodo]);
        setInput("");
    }

    const toggleTodo = (id) => {
        setTodos(todos.map(todo=> {
            return todo.id === id ? { ...todo, completed: !todo.completed } : todo
        }))
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    return (
        <div style={styles.container}>
            <h2>Todo List</h2>
            <div style={styles.inputRow}>
                <input
                    type={"text"}
                    value={input}
                    onChange={handleChange}
                    placeholder={"Enter todo"}
                />
                <button onClick={handleAddTodo}>Add</button>
            </div>
            { todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={toggleTodo}
                    onDelete={deleteTodo}
                />
            ))}
        </div>
    )
}

const styles = {
    container: {
        maxWidth: "400px",
        margin: "auto",
    },
    inputRow: {
        display: "flex",
        gap: "10px",
        margin: "0 90px"
    },
}

export default TodoList;