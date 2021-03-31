import React from "react";
import Todo from "../Todo";

export default function TodoList({ todoList, completeTodo, deleteTodo }) {
    return todoList.map((todo) => {
        return (
            <Todo
                key={todo.id}
                todo={todo}
                completeTodo={completeTodo}
                deleteTodo={deleteTodo}
            />
        );
    });
}
