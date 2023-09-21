import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Tasks from "../components/Tasks";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {});
  return (
    <div className="bg-gray-100 w-full h-full">
      <div className="mx-10">
        <div className="flex w-full pt-10">
          <Tasks />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
