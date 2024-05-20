import { useState, useEffect, useRef, createContext } from "react";
import { IonModal, IonContent } from "@ionic/react";
import { size } from "lodash";
import { TasksContextTypes } from "./TasksContext.types";
import { TaskForm } from "../../components/Task";
import { TaskModel } from "../../models";
import { Task } from "../../api";

const taskController = new Task();

export const TasksContext = createContext<TasksContextTypes.Context>({
  totalTasks: 0,
  totalTasksCompleted: 0,
  tasks: [],
  completedTasks: [],
  openFormTask: () => {},
  createTask: () => {},
  checkUncheckCompleted: () => {},
});

export function TasksProvider(props: TasksContextTypes.Props) {
  const { children } = props;
  const modalRef = useRef<HTMLIonModalElement>(null);
  const [tasks, setTasks] = useState<TaskModel[]>([]);
  const [completedTasks, setCompletedTasks] = useState<TaskModel[]>([]);
  const [totalTasks, setTotalTasks] = useState(0);
  const [totalTasksCompleted, setTotalTasksCompleted] = useState(0);

  const openFormTask = () => modalRef.current?.present();
  const closeFormTask = () => modalRef.current?.dismiss();

  useEffect(() => {
    obtainTasks();
  }, []);

  const createTask = (task: TaskModel) => {
    taskController.create(task);
    obtainTasks();
  };

  const obtainTasks = () => {
    const response = taskController.obtain();

    response.sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );

    const tasksTemp = response.filter((task) => !task.completed);
    const completedTasksTemp = response.filter((task) => task.completed);

    setTasks(tasksTemp);
    setCompletedTasks(completedTasksTemp);

    setTotalTasks(size(response));
    setTotalTasksCompleted(size(completedTasksTemp));
  };

  const checkUncheckCompleted = (id: string, check: boolean) => {
    const newTasks = [...tasks, ...completedTasks];

    newTasks.filter((task) => {
      if (task.id === id) task.completed = check;
    });

    taskController.changeAllTasks(newTasks);
    obtainTasks();
  };

  const valueContext: TasksContextTypes.Context = {
    totalTasks,
    totalTasksCompleted,
    tasks,
    completedTasks,
    openFormTask,
    createTask,
    checkUncheckCompleted,
  };

  return (
    <TasksContext.Provider value={valueContext}>
      {children}

      <IonModal
        ref={modalRef}
        trigger="open-modal"
        initialBreakpoint={0.25}
        breakpoints={[0, 0.25]}
      >
        <IonContent className="ion-padding">
          <TaskForm onClose={closeFormTask} />
        </IonContent>
      </IonModal>
    </TasksContext.Provider>
  );
}
