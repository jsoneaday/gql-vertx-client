import React, { useEffect, useState, ReactElement } from "react";
import { TaskModel } from "./models/TaskModel";
import Task from "./Task";

interface TasksGeneratorProp {
    taskList: Array<TaskModel> | null;
}

const TasksGenerator = ({taskList}: TasksGeneratorProp) => {
    const [tasks, setTasks] = useState<Array<ReactElement>>();

    useEffect(() => {
        if(taskList) {
            const currentTasks = [];
            for(let t = 0; t < taskList.length; t++) {
                const currentTask = taskList[t];
                
                currentTasks.push(
                    <Task
                        key={currentTask.id}
                        id={currentTask.id}
                        title={currentTask.title}
                        description={currentTask.description} />
                )
            }
            setTasks(currentTasks);
        }
    }, [taskList]);

    return <div className="task-container">{tasks}</div>
}

export default TasksGenerator;