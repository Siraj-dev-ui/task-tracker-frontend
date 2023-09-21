import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../Slices/userSlice";

const Layout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUser(JSON.parse(window.localStorage.getItem("user"))));
    // dispatch(setUser(window.localStorage.getItem('user')));
  }, []);

  const handleLogout = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("user");
    navigate("/");
    window.location.reload();
  };
  return (
    <>
      <div className="bg-black shadow-lg w-full h-20 flex justify-between items-center">
        <div className="flex flex-row mx-10 items-center h-full text-white">
          <div className="ml-10 text-xl">
            <Link to={"/"}>
              <span className={`mx-3 cursor-pointer`}>Dashboard</span>
            </Link>
            <Link to={"/create_tasks"}>
              <span className={`mx-3 cursor-pointer `}>Create Task</span>
            </Link>
          </div>
        </div>
        <div className="flex items-center text-2xl">
          {/* <Available /> */}
          <div
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className="mx-3 cursor-pointer text-gray-300 text-xl  bg-cyan-700  rounded-full text-center flex justify-center items-center active:bg-cyan-600"
          >
            <div
              onClick={handleLogout}
              className="px-4 py-2 text-white font-bold w-full h-full "
            >
              Logout
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
