import uuid from "uuid/dist/v4";

const LOCAL_TODO_LIST = "localTodoList";

export function getTodoObject(task) {
    return {
        id: uuid(),
        task: task,
        time: Date.now(),
        completed: false,
    };
}

export function getTodoListFromLocalStorage() {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_TODO_LIST));
    return storedTodos ? storedTodos : [];
}

export function AddTodoListToLocalStorage(todos) {
    localStorage.setItem(LOCAL_TODO_LIST, JSON.stringify(todos));
}
