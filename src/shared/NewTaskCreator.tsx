import React, { useState } from "react";
import "./NewTaskCreator.scss";
import { useMutation } from "@apollo/react-hooks";
import { AddTask, GetTasks } from "./Queries";

const NewTaskCreator = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [execAddTask] = useMutation(AddTask,{
        refetchQueries: [
            {
                query: GetTasks
            }
        ]
    });

    const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    const onChangeDesc = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDesc(e.target.value);
    }

    const onClickAddTask = async (e:any) => {
        e.preventDefault();

        await execAddTask({
            variables: {
                title,
                desc
            }
        });
    };

    return (
        <form className="task-creator">
          <div className="task-creator-inputs">
            <div className="task-creator-left">
              <div className="task-creator-item-container">
                <label htmlFor="title">Title</label>
              </div>
              <div className="task-creator-item-container">
                <label htmlFor="desc">Description</label>
              </div>
            </div>
            <div className="task-creator-right">
              <div className="task-creator-item-container">
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={onChangeTitle}
                />
              </div>
              <div className="task-creator-item-container">
                <input type="text" id="desc" value={desc} onChange={onChangeDesc} />
              </div>
            </div>
          </div>
          <div>
            <button onClick={onClickAddTask}>Add Task</button>
          </div>
        </form>
      );
}

export default NewTaskCreator;