import { useContext } from "react";
import { TasksContext } from "../context";

export const useTasks = () => useContext(TasksContext);
