import axios from 'axios';
import React, { useRef } from 'react';
import { Link, useNavigation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { baserUrl } from '../utils/urls';
import { setUser } from '../Slices/userSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  // const navigte = useNavigation();
  const dispatch = useDispatch();
  const refEmail = useRef('');
  const refPassword = useRef('');
  const handleLogin = async (event) => {
    event.preventDefault();
    // console.log('logging in user');
    let data = {};
    data.email = refEmail.current.value;
    data.password = refPassword.current.value;

    try {
      const user = await axios.post(`${baserUrl}/auth/login`, data);
      console.log('logged in user : ', user.data.user);
      data = {};
      if (user) {
        data._id = user.data.user._id;
        data.firstName = user.data.user.firstName;
        data.lastName = user.data.user.lastName;
        data.email = user.data.user.email;
        console.log('data before saving : ', data);
        window.localStorage.setItem('user', JSON.stringify(data));
        // window.localStorage.setItem('user', JSON.parse(JSON.stringify(data)));
        // dispatch(setUser(user.data.user));
      }
      if (user.data.status == 'success') {
        // alert('login successfully...');
        window.localStorage.setItem('token', user.data.token);
        window.location.reload();
        // navigte.to('');
      }
    } catch (err) {
      toast.error('Invalid Email or Password', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };
  return (
    <div className='w-full h-screen flex justify-center items-center bg-gray-300'>
      <div className='block p-6 rounded-lg shadow-lg bg-white max-w-sm'>
        <form onSubmit={handleLogin}>
          <div className='form-group mb-6'>
            <label className='form-label inline-block mb-2 text-gray-700'>
              Email address
            </label>
            <input
              ref={refEmail}
              type='email'
              className='form-control
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
              id='exampleInputEmail2'
              aria-describedby='emailHelp'
              placeholder='Enter email'
            />
          </div>
          <div className='form-group mb-6'>
            <label className='form-label inline-block mb-2 text-gray-700'>
              Password
            </label>
            <input
              ref={refPassword}
              type='password'
              className='form-control block
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
              id='exampleInputPassword2'
              placeholder='Password'
            />
          </div>
          <div className='flex justify-between items-center mb-6'>
            <div className='form-group form-check'>
              {/* <input
                type='checkbox'
                className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
                id='exampleCheck2'
              />
              <label className='form-check-label inline-block text-gray-800'>
                Remember me
              </label> */}
            </div>
            {/* <a
              href='#!'
              className='text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out'
            >
              Forgot password?
            </a> */}
          </div>
          <button
            type='submit'
            className='
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
      ease-in-out'
          >
            Sign in
          </button>
          <div className='text-gray-800 mt-6 text-center'>
            Not a member?{' '}
            <div className='text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out'>
              <Link to={'/register'}>Register</Link>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
