import React, { useState } from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  const [employee, setEmployee] = useState(data);
  const handleTaskComplete = (index) => {
    const updatedTasks = [...employee.tasks];
    updatedTasks[index] = {
      ...updatedTasks[index],
      active: false,
      completed: true,
    };
    
    setEmployee((prev) => ({
      ...prev,
      tasks: updatedTasks,
      activeTasks: prev.activeTasks - 1,
      completedTasks: prev.completedTasks + 1,
    }));
    console.log("printing tasklist data:", data);
  };

  const handleTaskFail = (index) => {
    const updatedTasks = [...employee.tasks];
    updatedTasks[index] = {
      ...updatedTasks[index],
      active: false,
      failed: true,
    };
    setEmployee((prev) => ({
      ...prev,
      tasks: updatedTasks,
      employeeactiveTasks: prev.activeTasks - 1,
      failedTasks: prev.failedTasks + 1,
    }));
  };
  return (
    <div
      id="taskList"
      className="h-[50%] flex items-center overflow-x-auto justify-start gap-5 flex-nowrap w-full mt-10"
    >
      {employee.tasks.map((e, index) => {
        if (e.active) {
          return (
            <AcceptTask
              key={index}
              data={e}
              onComplete={() => handleTaskComplete(index)}
              onFail={() => handleTaskFail(index)}
            />
          );
        }
        if (e.newTask) {
          return <NewTask key={index} data={e} />;
        }
        if (e.completed) {
          return <CompleteTask key={index} data={e} />;
        }
        if (e.failed) {
          return <FailedTask key={index} data={e} />;
        }
        return null; // fallback in case nothing matches
      })}
    </div>
  );
};

export default TaskList;
