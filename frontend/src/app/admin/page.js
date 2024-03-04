'use client'
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const page = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleAdminLogin = async() => {
    // validate fields before sending to backend
    // check if inputs are empty 
    if(!username || !password){
      alert('Fill all credentials');
      return;
    }

    try{
      const response = await axios.post('http://localhost:5000/api/admin',  { username, password });
      if(response.status === 200){
        // on successful login, redirect user to dashboard and save token in localStorage
        const token = response.data.token;
        localStorage.setItem('adminToken', token);
        router.push('/dashboard')
      } else {
        alert('Please try again');
      }
    } catch (error) {
      alert('Invalid Credentials')
    }
  }

  return (
    <div className='w-screen h-screen flex items-center justify-center bg-black text-white'>
      
      <div className='basis-4/12 max-md:basis-11/12 h-auto border-2 border-white my-32 py-16 rounded-2xl flex flex-col items-center'>

        <div className='mb-4 text-2xl font-bold underline'>ADMIN LOGIN</div>

        <div className='flex flex-col'>
          <label className='font-semibold text-lg mt-4'>Username</label>
          <input className='border-2 border-black outline-none py-2 px-4 rounded-lg text-black' 
            type="text" placeholder='Username' value={username} onChange={ (e) => setUsername(e.target.value) }/>
        </div>

        <div className='flex flex-col'>
          <label className='font-semibold text-lg mt-4'>Password</label>
          <input className='border-2 border-black outline-none py-2 px-4 rounded-lg text-black' 
            type="password" placeholder='Password' value={password} onChange={ (e) => setPassword(e.target.value) }/>
        </div>

        <div className='mt-12 border-2 border-white py-2 px-6 rounded-lg font-semibold hover:scale-110 cursor-pointer'
          onClick={handleAdminLogin}
        >
          LOG IN
        </div>

      </div>

    </div>
  )
}

export default page