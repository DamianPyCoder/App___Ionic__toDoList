import { TaskModel } from "../../models";

export namespace TasksContextTypes {
  export type Props = {
    children: JSX.Element;
  };

  export type Context = {
    totalTasks: number;
    totalTasksCompleted: number;
    tasks: TaskModel[];
    completedTasks: TaskModel[];
    openFormTask: () => void;
    createTask: (task: TaskModel) => void;
    checkUncheckCompleted: (id: string, check: boolean) => void;
  };
}
