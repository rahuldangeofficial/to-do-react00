import "./TodoForm.css";
import { useState } from "react";
import { useTasksDispatch } from "../TodoProvider/TodoProvider";
import { v4 as uuidv4 } from "uuid";

export default function TodoForm() {
    const [newTask, setNewTask] = useState("");

    const dispatch = useTasksDispatch();

    const handleAdd = () => {
        if (newTask !== "") {
            dispatch({ type: "add", id: uuidv4(), taskName: newTask });
            setNewTask("");
        }
    };
    return (
        <>
            <div className="form-container">
                <input
                    className="task-input-field"
                    type="text"
                    onChange={(e) => {
                        setNewTask(e.target.value);
                    }}
                    value={newTask}
                />
                <button className="add-button" onClick={handleAdd}>
                    Add
                </button>
            </div>
        </>
    );
}
