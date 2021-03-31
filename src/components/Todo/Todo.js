import React from "react";
import { getDateAndTimeString, getTaskStringColor } from "./helper";
import "./Todo.css";
import CompleteIcon from "../../assets/icons/icon-complete.png";
import DeleteIcon from "../../assets/icons/icon-delete.png";

export default function Todo({ todo, completeTodo, deleteTodo }) {
    function handleOnClickComplete() {
        completeTodo(todo.id);
    }
    function handleOnClickDelete() {
        deleteTodo(todo.id);
    }

    return (
        <div className={"container"}>
            <div className={"labelContainer"}>
                <label
                    className={"taskLabel"}
                    style={{ color: getTaskStringColor(todo.completed) }}
                >
                    {todo.task}
                </label>
                <label className={"timeLabel"}>
                    {getDateAndTimeString(todo.time)}
                </label>
            </div>

            <div className={"buttonsContainer"}>
                {!todo.completed && (
                    <button
                        className={"button"}
                        onClick={handleOnClickComplete}
                    >
                        <img
                            className={"image"}
                            src={CompleteIcon}
                            alt={"edit"}
                        />
                    </button>
                )}
                <button className={"button"} onClick={handleOnClickDelete}>
                    <img className={"image"} src={DeleteIcon} alt={"edit"} />
                </button>
            </div>
        </div>
    );
}
