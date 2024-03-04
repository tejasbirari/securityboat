'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const page = () => {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  
  const handleLogin = async() => {

    // validate fields before sending to backend
    // check if inputs are empty 
    if(!mobile || !password){
      alert('Fill all credentials');
      return;
    }

    // Regular expression to match 10 digits only
    const mobileRegex = /^\d{10}$/;

    if (!mobileRegex.test(mobile)) {
      alert('Incorrect Mobile No.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/login/user', { mobile, password });
      localStorage.setItem('user', response.data.user)
      if (response.status === 200) {
        // on successful login, redirect user to homepage and save token in localStorage
        const token = response.data.token;
        localStorage.setItem('Token', token);
        router.push('/');
      }
    } catch (error) {
      alert('Invalid Credentials')
    }

  }

  return (
    <div className='w-screen h-screen flex items-center justify-center bg-black text-white'>
      
      <div className='basis-4/12 max-md:basis-11/12 h-auto border-2 border-white my-32 py-16 rounded-2xl flex flex-col items-center'>

        <div className='mb-4 text-2xl font-bold underline'>LOG IN</div>

        <div className='flex flex-col'>
          <label className='font-semibold text-lg mt-4'>Mobile Number</label>
          <input className='border-2 border-black outline-none py-2 px-4 rounded-lg text-black' 
            type="text" placeholder='Mobile Number' value={mobile}
            onChange={ (e) => setMobile(e.target.value) }
          />
        </div>

        <div className='flex flex-col'>
          <label className='font-semibold text-lg mt-4'>Password</label>
          <input className='border-2 border-black outline-none py-2 px-4 rounded-lg text-black' 
            type="password" placeholder='Password' value={password}
            onChange={ (e) => setPassword(e.target.value) }  
          />
        </div>

        <div className='mt-12 border-2 border-white py-2 px-6 rounded-lg font-semibold hover:scale-110 cursor-pointer'
          onClick={handleLogin}
        >
            LOG IN
        </div>

        <div className='mt-4 text-sm'>
            Don't have an account?
            <Link href='/signup'>
                <span className='cursor-pointer text-blue-400'> Sign Up </span>
            </Link>
            here
        </div>

      </div>

    </div>
  )
}

export default page