'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const page = () => {
  const router = useRouter();
  const [total, setTotal] = useState(0)

  useEffect(() => {
    // Get the price from the query parameter
    const price = router.query.price;
    setTotal(price);
    console.log(price);
  }, [router.query.price]);


  return (
    <div className='w-full'>
      <div className='my-20 mx-48 max-md:mx-2 flex flex-col items-center'>


        <div className='border-2 border-slate-400 rounded-lg w-4/12 max-md:w-full'>

          <div className='text-center text-xl font-bold mt-4 mb-4 underline'>Order</div>

          <div className='flex flex-col mx-4'> 
            <label className='font-semibold'>Address</label>
            <input className='border-2 border-black rounded-lg py-2 px-4 mb-4' 
              type="text" placeholder='Address'/>
          </div>

          <div className='flex flex-col mx-4'> 
            <label className='font-semibold'>Mobile No</label>
            <input className='border-2 border-black rounded-lg py-2 px-4 mb-4' 
              type="text" placeholder='Mobile No'/>
          </div>

          <div className='flex items-center justify-between mx-6 max-md:mx-8 mb-4 font-bold'>
            <label>Total:</label>
            {total ? total : 'Loading...'}
          </div>

        </div>

        <div className='mt-8 text-center text-white fon-bold bg-slate-950 border-2 border-white py-2 px-8 rounded-lg cursor-pointer hover:scale-110'>
          Place Order
        </div>

      </div>
    </div>
  )
}

export default page