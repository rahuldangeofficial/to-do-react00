import TodoItem from "../TodoItem/TodoItem";
import { useTasks } from "../TodoProvider/TodoProvider";

export default function TodoList() {
  const tasks = useTasks();

  return (
    <>
      <div>
        {tasks.map((task) => {
          return (
            <TodoItem
              key={task.id}
              id={task.id}
              taskName={task.taskName}
              isCompleted={task.isCompleted}
            />
          );
        })}
      </div>
    </>
  );
}
