import { map, size } from "lodash";
import { useTasks } from "../../../hooks";
import { TaskItem } from "../TaskItem";
import "./ListTasks.scss";

export function ListTasks() {
  const { tasks, completedTasks } = useTasks();

  return (
    <div className="list-tasks">
      {size(tasks) === 0 && size(completedTasks) === 0 && (
        <p className="list-tasks__no-found">Empieza a crear tus tareas</p>
      )}

      {size(tasks) > 0 && <h3>Tareas</h3>}
      {map(tasks, (task) => (
        <TaskItem key={task.id} task={task} />
      ))}

      {size(completedTasks) > 0 && <h3>Tareas completadas</h3>}
      {map(completedTasks, (task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}
