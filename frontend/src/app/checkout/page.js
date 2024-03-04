'use client'
import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation'
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const page = () => {

  let token = null;
  const router = useRouter();
  const searchParams = useSearchParams();

  const [total, setTotal] = useState(0)
  const [address, setAddress] = useState('');
  const [mobile, setMobile] = useState('');
  const id = searchParams.get('id');

  if (typeof window !== 'undefined') {
    // Accessing localStorage only in the browser 
    token = localStorage.getItem('Token');
  }

  // function to check if token is valid or not
  const isValidToken = (token) => {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    if(decodedToken.exp < currentTime){
      localStorage.removeItem('Token');
      return false;
    }
    return true;
  }

  // function to check user and redirect accordingly
  const handleCheckUser = () => {
      if (token && isValidToken(token)) {
      //  if user is logged in & token is valid, redirect to add product page
      router.push('/add_product');
      } else {
      router.push('/login');
      alert('Please log in to proceed');
      }
  }
  
  useEffect(() => {

    // check user and redirect accordingly
    handleCheckUser();

    // Get the price from the query parameter
    const price = searchParams.get('price')
    setTotal(price);
  }, );


  // Place order
  const handlePlaceOrder = async(id) => {

    // validate all fields
    if(!address || !mobile){
      alert("Please fill all details to proceed order");
      return;
    }

    //validate mobile number
    const mobileRegex = /^\d{10}$/;

    if (!mobileRegex.test(mobile)) {
      alert('Incorrect Mobile No.');
      return;
    }

    // if all fields are valid, proceed to confirm order 
    try {
      const response = await axios.post('', {id});
      // if response status 200, it will return and redirect  
      alert("Order Confirmed");
      router.push('/');
    } catch (error) {
      console.log('Error frontend', error);
    }
  }


  return (
    <div className='w-full'>
      <div className='my-20 mx-48 max-md:mx-2 flex flex-col items-center'>


        <div className='border-2 border-slate-400 rounded-lg w-4/12 max-md:w-full'>

          <div className='text-center text-xl font-bold mt-4 mb-4 underline'>Order</div>

          <div className='flex flex-col mx-4'> 
            <label className='font-semibold'>Address</label>
            <input className='border-2 border-black rounded-lg py-2 px-4 mb-4' 
              type="text" placeholder='Address' value={address} onChange={ (e) => setAddress(e.target.value) } />
          </div>

          <div className='flex flex-col mx-4'> 
            <label className='font-semibold'>Mobile No</label>
            <input className='border-2 border-black rounded-lg py-2 px-4 mb-4' 
              type="text" placeholder='Mobile No' value={mobile} onChange={ (e) => setMobile(e.target.value) } />
          </div>

          <div className='flex items-center justify-between mx-6 max-md:mx-8 mb-4 font-bold'>
            <label>Total:</label>
            {total ? total : 'Loading...'}
          </div>

        </div>

        <div onClick={ () => handlePlaceOrder(id) }
          className='mt-8 text-center text-white fon-bold bg-slate-950 border-2 border-white py-2 px-8 rounded-lg cursor-pointer hover:scale-110'>
          Confirm Order
        </div>

      </div>
    </div>
  )
}

export default page