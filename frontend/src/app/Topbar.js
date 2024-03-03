'use client'
import React from 'react';
import Link from 'next/link';

const Topbar = () => {

    let token = null;

    if (typeof window !== 'undefined') {
        // Accessing localStorage only in the browser 
        token = localStorage.getItem('Token');
    }

    // onclick logout, token will be removed
    const handleLogOut = () => {
        if (typeof window !== 'undefined') {
            localStorage.removeItem('Token');
            window.location.reload();
        }
    }

  return (
    <div className='w-full h-20 bg-slate-950 text-white flex items-center justify-between'>
        
        <Link href='/'>
            <div id='logo' className='ml-12 text-2xl font-bold cursor-pointer max-lg:ml-4'>
                ecom.
            </div>
        </Link>

        <div className='flex items-center justify-between mr-12 basis-3/12 font-semibold max-lg:mr-4 max-lg:basis-6/12 max-lg:text-sm'>


            {/* if user is logged in then show log out else show login & signup */}
            { token ? 
                <div className='text-red-400 cursor-pointer ml-20 max-md:ml-12' onClick={handleLogOut}>Log Out</div> : 
                <>
                    <Link href='/login'>
                        <div className='cursor-pointer hover:underline hover:scale-110'>Log in</div>
                    </Link>
                    <Link href='/signup'>
                        <div className='cursor-pointer hover:underline hover:scale-110'>Sign up</div>
                    </Link>
                </>
            }
            
            <Link href='/admin'>
                <div className='py-1 px-6 border-2 border-white rounded-lg cursor-pointer max-lg:px-2 hover:scale-110'>Admin</div>
            </Link>
        </div>

    </div>
  )
}

export default Topbar