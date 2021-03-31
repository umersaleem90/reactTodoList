import React, { useState, useRef, useEffect } from "react";
import TodoList from "../TodoList";
import {
    AddTodoListToLocalStorage,
    getTodoListFromLocalStorage,
    getTodoObject,
} from "./helper";
import AddIcon from "../../assets/icons/icon-add.png";
import "./Home.css";

export default function Main() {
    const [todoList, setTodoList] = useState(getTodoListFromLocalStorage());
    const inputRef = useRef();

    useEffect(() => {
        AddTodoListToLocalStorage(todoList);
    }, [todoList]);

    function completeTodo(id) {
        const newTodoList = [...todoList];
        const todo = newTodoList.find((todo) => todo.id === id);
        todo.completed = true;
        setTodoList(newTodoList);
    }

    function deleteTodo(id) {
        const newTodoList = [...todoList];
        setTodoList(newTodoList.filter((todo) => todo.id !== id));
    }

    function handleAddTodo() {
        const task = inputRef.current.value;
        if (task === "") return;
        setTodoList((previousList) => {
            return [...previousList, getTodoObject(task)];
        });
        inputRef.current.value = null;
    }

    return (
        <div className={"main"}>
            <div class={"inputContainer"}>
                <input
                    maxLength={100}
                    className={"input"}
                    ref={inputRef}
                    type="text"
                />
                <button className={"addButton"} onClick={handleAddTodo}>
                    <img src={AddIcon} alt={"Add"} className={"addIcon"} />
                    Add Task
                </button>
            </div>
            <div className={"borderLine"} />
            <TodoList
                todoList={todoList}
                completeTodo={completeTodo}
                deleteTodo={deleteTodo}
            />
        </div>
    );
}
