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
      <input
        type="text"
        onChange={(e) => {
          setNewTask(e.target.value);
        }}
        value={newTask}
      />
      <button onClick={handleAdd}>Add</button>
    </>
  );
}
