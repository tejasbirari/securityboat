'use client'
import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation'
import axios from 'axios';
import requireUserAuth from '../requiredUserAuth';

const page = () => {

  const router = useRouter();
  const searchParams = useSearchParams();

  const [total, setTotal] = useState(0)
  const [address, setAddress] = useState('');
  const [mobile, setMobile] = useState('');
  const [paymentMode, setPaymentMode] = useState('');
  const id = searchParams.get('id');

  useEffect(() => {
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
      const token = localStorage.getItem('Token');
      const userId = localStorage.getItem('user');
      const response = await axios.post('http://localhost:5000/api/confirm_order', { productId:id, userId, address, mobile, paymentMode, price:total},
       { headers: {
          Authorization: `Bearer ${token}`
        }}
      );
      console.log(response);
      // if response status 200, it will return and redirect  
      if(response.status === 200){
        alert("Order Confirmed");
        router.push('/');
      }else{
        alert("Server Error. Order not confirmed")
      }
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

          <div className='flex items-center mx-4'> 
            <label htmlFor='code' className='font-semibold'>Cash on Delivery</label>
            <input className='ml-4'
              type="radio" id="cod" value="cod" onChange={ (e) => setPaymentMode(e.target.value) } required/>
          </div>

          <div className='text-sm text-slate-500 ml-4 mb-6'>Soon we are having other payment methods.</div>

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

export default requireUserAuth(page)