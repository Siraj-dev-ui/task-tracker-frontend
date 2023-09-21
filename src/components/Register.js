import React, { useRef } from "react";
import axios from "axios";
import { baserUrl } from "../utils/urls";

const Register = () => {
  const refFirstName = useRef("");
  const refLastName = useRef("");
  const refEmail = useRef("");
  const refPassword = useRef("");

  const handleRegister = async (event) => {
    event.preventDefault();
    const data = {};

    data.firstName = refFirstName.current.value;
    data.lastName = refLastName.current.value;
    data.email = refEmail.current.value;
    data.password = refPassword.current.value;
    try {
      const user = await axios.post(`${baserUrl}/auth/register`, data);
      console.log(user);
      alert("Sign up successfully...");
      window.location.reload();
    } catch (err) {
      console.log("user not added");
    }
    // if (user) {
    //   alert('Sign up successfully...');
    // }
  };
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-300">
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
        <form onSubmit={handleRegister}>
          <div className="flex flex-row items-center justify-center lg:justify-start">
            <p className="text-lg mb-0 mr-4">Register</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="form-group mb-6">
              <input
                type="text"
                ref={refFirstName}
                className="form-control
          block
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
                id="exampleInput123"
                aria-describedby="emailHelp123"
                placeholder="First name"
              />
            </div>
            <div className="form-group mb-6">
              <input
                type="text"
                ref={refLastName}
                className="form-control
          block
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
                id="exampleInput124"
                aria-describedby="emailHelp124"
                placeholder="Last name"
              />
            </div>
          </div>
          <div className="form-group mb-6">
            <input
              type="email"
              ref={refEmail}
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
              id="exampleInput125"
              placeholder="Email address"
            />
          </div>
          <div className="form-group mb-6">
            <input
              ref={refPassword}
              type="password"
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
              id="exampleInput126"
              placeholder="Password"
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
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
