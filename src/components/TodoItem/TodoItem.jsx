import { useTasksDispatch } from "../TodoProvider/TodoProvider";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

export default function TodoItem({ id, taskName, isCompleted }) {
  const dispatch = useTasksDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [localTitleText, setLocalTitleText] = useState("");
  const [localIsChecked, setLocalIsChecked] = useState(false);

  useEffect(() => {
    setLocalTitleText(taskName);
  }, [taskName]);

  useEffect(() => {
    setLocalIsChecked(isCompleted);
  }, [isCompleted]);

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
    setLocalIsChecked(!localIsChecked);
    dispatch({ type: "done", id: id, isChecked: !localIsChecked });
  };

  return (
    <>
      <div className="task-container">
        <input
          type="checkbox"
          checked={localIsChecked}
          onChange={handleCheckboxChange}
        />

        {isEditing ? (
          <input
            type="text"
            onChange={(e) => {
              setLocalTitleText(e.target.value);
            }}
            value={localTitleText}
          ></input>
        ) : (
          <p>{taskName}</p>
        )}
        <div className="actions-container">
          {isEditing ? (
            <button onClick={handleSave}>Save</button>
          ) : (
            <button onClick={handleEdit}>Edit</button>
          )}
          <button onClick={handleDelete}>Delete</button>
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
