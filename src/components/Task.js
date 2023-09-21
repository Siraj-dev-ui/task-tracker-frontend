import React from "react";
import { useSelector } from "react-redux";
import { baserUrl } from "../utils/urls";
import axios from "axios";
// import DateRangePicker from 'flowbite-datepicker/DateRangePicker';

const Task = ({ name, description, _id, priority, status, updateTask }) => {
  const changeTaskStatus = async () => {
    const resp = await axios.post(`${baserUrl}/task/updateTaskStatus`, {
      _id: _id,
      status: status,
    });
    console.log("resp of update task : ", resp);
    if (resp.data.status === "success") {
      updateTask(_id, status);
    }
    console.log("task completed : ", _id);
  };
  return (
    <div className="bg-white flex justify-between items-center  rounded-xl drop-shadow-xl mb-5">
      <div className="py-3 w-full rounded-xl flex justify-between items-center">
        <span className="ml-3 w-1/4">{name}</span>
        <span className=" w-1/4">{description}</span>
        <span className=" w-1/4">{priority}</span>
        <span className=" w-1/4">{status}</span>

        <span className=" w-1/4 flex justify-center">
          <>
            <button
              onClick={changeTaskStatus}
              type="button"
              className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              {status === "completed" ? "Mark InComplete" : "Mark Complete"}
            </button>
          </>
        </span>
      </div>
    </div>
  );
};

export default Task;
