import { TodoItemProps} from "./TodoList.types";

const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
    return (
        <div style={styles.todoItem}>
        <input
            type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
                />
                <span
                    style={{
                        ...styles.todoText,
                                textDecoration: todo.completed ? "line-through" : "none",
                        }}
                    >
                    {todo.text}
                </span>
                <button onClick={() => onDelete(todo.id)} style={styles.deleteButton}>
                    Delete
                </button>
        </div>
    )
};

const styles = {
    todoItem: {
        margin: "10px 0",
        display: "flex",
        alignItems: "center",
    },
    todoText: {
        marginLeft: "10px",
        flex: 1,
    },
    deleteButton: {
        marginLeft: "10px",
    },
}

export default TodoItem;