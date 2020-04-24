import React, { useState, useEffect } from 'react';
import NavBar from "./shared/NavBar";
import "./App.scss";
import { useQuery } from '@apollo/react-hooks';
import { GetUser, GetTasks } from './shared/Queries';
import TaskModel from './shared/models/TaskModel';
import TasksGenerator from './shared/TasksGenerator';
import NewTaskCreator from './shared/NewTaskCreator';

function App() {
  const userResult = useQuery(GetUser, {
    variables: {
      id: 5
    }
  });  
  const [greeting, setGreeting] = useState("");
  const taskResult = useQuery(GetTasks);
  const [taskList, setTaskList] = useState<Array<TaskModel> | null>(null);

  useEffect(() => {
    if(taskResult && taskResult.data && taskResult.data.getTasks) {
      setTaskList(taskResult.data.getTasks);
    }
  }, [taskResult, taskResult.data]);

  useEffect(() => {
    if(!userResult || !userResult.data) return;

    if (userResult && userResult.data && userResult.data.getUser) {
      setGreeting(`Hello, ${userResult.data.getUser.name}`)
    }

  }, [userResult, userResult.data]);

  return (
    <div className="App">
      <NavBar />
      <div className="app-body">
        <div style={{ marginBottom: "1rem", marginTop: "1rem" }}>
  <strong>{greeting}</strong>
        </div>
        <div className="app-body-left">
          <NewTaskCreator />
        </div>
        <div className="app-body-right">
          <TasksGenerator
           taskList={taskList} />
        </div>
      </div>
    </div>
  );
}

export default App;
