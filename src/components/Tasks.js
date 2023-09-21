import React, { useEffect, useState } from "react";
import Task from "./Task";
import { baserUrl } from "../utils/urls";
import axios from "axios";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    console.log("getting tasks");
    const currentUser = JSON.parse(window.localStorage.getItem("user"));
    const res = await axios.post(`${baserUrl}/task/getTasks`, {
      _id: currentUser._id,
    });
    console.log("res of tasks : ", res);
    if (res.data.status === "success") {
      setTasks(res.data.tasks);
    }
  };
  const updateTask = (id, status) => {
    console.log("id : ", id, status);
    const newArr = tasks.map((obj) => {
      if (obj._id === id) {
        return {
          ...obj,
          status: status === "in-complete" ? "completed" : "in-complete",
        };
      }

      return obj;
    });

    setTasks(newArr);
  };
  const sort = (sortBy) => {
    console.log("sorting");
    let sorted = tasks.sort((a, b) => {
      let fa = a[sortBy].toLowerCase(),
        fb = b[sortBy].toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });

    console.log("sorted ", sorted);
    setTasks(sorted);
  };
  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="w-full">
      <div className=" text-center font-bold text-3xl mb-5">Tasks</div>

      <div className="bg-white flex justify-between items-center  rounded-xl drop-shadow-xl mb-5">
        <div className="py-3 w-full rounded-xl flex justify-between items-center">
          <span
            className="ml-3 w-1/4 font-bold cursor-pointer"
            onClick={() => sort("name")}
          >
            Name
          </span>
          <span
            className=" w-1/4  font-bold cursor-pointer"
            onClick={() => sort("description")}
          >
            {" "}
            Description
          </span>
          <span
            className=" w-1/4  font-bold cursor-pointer"
            onClick={() => sort("priority")}
          >
            Priority
          </span>
          <span
            className=" w-1/4  font-bold cursor-pointer"
            onClick={() => sort("status")}
          >
            Status
          </span>

          <span className=" w-1/4 flex justify-center">Actions</span>
        </div>
      </div>
      {tasks.map((task) => (
        <Task
          key={task._id}
          name={task.name}
          description={task.description}
          priority={task.priority}
          status={task.status}
          _id={task._id}
          updateTask={updateTask}
        />
      ))}
    </div>
  );
};

export default Tasks;
