import React, { useRef } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { baserUrl } from "../utils/urls";

const CreateTask = () => {
  const user = useSelector((s) => s.loginUser.user);
  const refName = useRef();
  const refDescription = useRef();
  const refPriority = useRef();
  const addTask = async (event) => {
    try {
      event.preventDefault();
      console.log("sending team request : ");
      console.log("user id sending", user._id);
      let data = {};
      data.name = refName.current.value;
      data.description = refDescription.current.value;
      data.priority = refPriority.current.value;
      data.user_Id = user._id;

      const res = await axios.post(`${baserUrl}/task/createTask`, data);
      if (res.data.status === "success") {
        alert("task Added successfully...");
        window.location.reload();
      } else if (res.data.status === "failed") {
        alert(res.data.message);
      }
    } catch (err) {
      if (err.message === "Network Error") {
        alert(err.message);
      }
      console.log("error in creating team : ", err);
    }
  };
  return (
    <div className="block p-6 rounded-lg bg-white max-w-sm">
      <form onSubmit={addTask}>
        <div className="form-group mb-6">
          <input
            type="text"
            ref={refName}
            className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInput90"
            placeholder="Name"
          />
        </div>
        <div className="form-group mb-6">
          <input
            type="text"
            ref={refDescription}
            className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInput90"
            placeholder="Description"
          />
        </div>
        <div className="form-group mb-6">
          <input
            type="text"
            ref={refPriority}
            className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInput91"
            placeholder="Priority"
          />
        </div>

        <button
          type="submit"
          className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
