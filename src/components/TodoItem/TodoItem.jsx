import "./TodoItem.css";
import { useTasksDispatch } from "../TodoProvider/TodoProvider";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

export default function TodoItem({ id, taskName, isCompleted }) {
    const dispatch = useTasksDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [localTitleText, setLocalTitleText] = useState("");

    useEffect(() => {
        setLocalTitleText(taskName);
    }, [taskName]);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        setIsEditing(false);
        dispatch({ type: "save", id: id, taskName: localTitleText });
    };

    const handleDelete = () => {
        setIsEditing(false);
        dispatch({ type: "delete", id: id });
    };

    const handleCheckboxChange = () => {
        dispatch({ type: "done", id: id, isCompleted: !isCompleted });
    };

    return (
        <>
            <div className="task-container">
                <input
                    type="checkbox"
                    checked={isCompleted}
                    onChange={handleCheckboxChange}
                />
                <div className="task-name-container">
                    {isEditing ? (
                        <input
                            className="task-name"
                            type="text"
                            onChange={(e) => {
                                setLocalTitleText(e.target.value);
                            }}
                            value={localTitleText}
                        ></input>
                    ) : (
                        <input
                            className="task-name"
                            type="text"
                            value={taskName}
                            disabled
                        ></input>
                    )}
                </div>
                <div className="actions-container">
                    {isEditing ? (
                        <button className="action-button" onClick={handleSave}>
                            Save
                        </button>
                    ) : (
                        <button className="action-button" onClick={handleEdit}>
                            Edit
                        </button>
                    )}
                    <button className="action-button" onClick={handleDelete}>
                        Delete
                    </button>
                </div>
            </div>
        </>
    );
}

TodoItem.propTypes = {
    taskName: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
};
