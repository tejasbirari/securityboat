'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const page = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignUp = async() => {

    // validate fields before sending to backend
    // check if inputs are empty 
    if(!mobile || !firstName || !lastName || !password){
      alert('Fill all credentials');
      return;
    }

    // regular expression to match 10 digits only
    const mobileRegex = /^\d{10}$/;

    if (!mobileRegex.test(mobile)) {
      alert('Incorrect Mobile No.');
      return;
    }

    // regular expression for password 
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

    if (!passwordRegex.test(password)) {
      alert('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/signup', {firstName, lastName, mobile, password});
      if(response.status === 201){
        // on successful user sign-up, send user to login page to login
        alert('Sign up successful. Please login')
        router.push('/login')
      }
    } catch (error) {
      alert('Incorrect Mobile No.')
    }
    
  }

  return (
    <div className='w-screen h-screen flex items-center justify-center bg-black text-white'>
      
      <div className='basis-4/12 max-md:basis-11/12 h-auto border-2 border-white my-32 py-16 rounded-2xl flex flex-col items-center'>

        <div className='mb-4 text-2xl font-bold underline'>SIGN UP</div>

        <div className='flex flex-col'>
          <label className='font-semibold text-lg mt-4'>First Name</label>
          <input className='border-2 border-black outline-none py-2 px-4 rounded-lg text-black' 
            type="text" placeholder='First Name' value={firstName}
            onChange={ (e) => setFirstName(e.target.value) }  
          />
        </div>

        <div className='flex flex-col'>
          <label className='font-semibold text-lg mt-4'>Last Name</label>
          <input className='border-2 border-black outline-none py-2 px-4 rounded-lg text-black' 
            type="text" placeholder='Last Name' value={lastName}
            onChange={ (e) => setLastName(e.target.value) }    
          />
        </div>

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
          onClick={handleSignUp}
        >
          SIGN UP
        </div>

        <div className='mt-4 text-sm'>
            Already user?
            <Link href='/login'>
                <span className='cursor-pointer text-blue-400'> Log In </span>
            </Link>
            here
        </div>

      </div>

    </div>
  )
}

export default page