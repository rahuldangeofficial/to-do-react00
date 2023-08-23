/* eslint-disable react-refresh/only-export-components */
import PropTypes from "prop-types";

import { createContext, useContext, useReducer } from "react";

const TodoContext = createContext();
const TodoDispatchContext = createContext();

const todoReducer = (tasks, action) => {
  switch (action.type) {
    case "add": {
      return [
        ...tasks,
        {
          id: action.id,
          taskName: action.taskName,
          isCompleted: false,
        },
      ];
    }

    case "save": {
      return tasks.map((task) => {
        if (task.id === action.id) {
          return {
            id: task.id,
            taskName: action.taskName,
            isCompleted: task.isCompleted,
          };
        }
        return task;
      });
    }

    case "delete": {
      return tasks.filter((task) => task.id !== action.id);
    }

    case "done": {
      return tasks.map((task) => {
        if (task.id === action.id) {
          return {
            id: task.id,
            taskName: task.taskName,
            isCompleted: action.isCompleted,
          };
        }
        return task;
      });
    }

    default:
      return tasks;
  }
};
const initialState = [];

export function TodoProvider({ children }) {
  const [tasks, dispatch] = useReducer(todoReducer, initialState);

  return (
    <>
      <TodoContext.Provider value={tasks}>
        <TodoDispatchContext.Provider value={dispatch}>
          {children}
        </TodoDispatchContext.Provider>
      </TodoContext.Provider>
    </>
  );
}

export function useTasks() {
  return useContext(TodoContext);
}

export function useTasksDispatch() {
  return useContext(TodoDispatchContext);
}

TodoProvider.propTypes = {
  children: PropTypes.node,
};
