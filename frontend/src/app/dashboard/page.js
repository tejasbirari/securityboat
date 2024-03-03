'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { MdOutlineDeleteOutline } from "react-icons/md";
import { jwtDecode } from "jwt-decode";

const page = () => {

  const router = useRouter();

  // store reterived products data in array
  const [products, setProducts] = useState([]);

  let token = null;

  // logout admin
  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    router.push('/');
  }

  if (typeof window !== 'undefined') {
    // Accessing localStorage only in the browser 
    token = localStorage.getItem('adminToken');
  }

  // check if token is valid or not
  const isValidToken = (token) => {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    if(decodedToken.exp < currentTime){
      localStorage.removeItem('adminToken');
      return false;
    }
    return true;
  }

  const handleCheckUser = () => {
    if (token && isValidToken(token)) {
      //  if user is logged in & token is valid, redirect to add product page
      router.push('/add_product');
    } else {
      alert('Please log in to proceed');
      router.push('/admin');
    }
  }

  // this will fetch products every time page gets refresh
  useEffect(() => {
    const fetchProducts = async() => {
      try {
        const response = await axios.get('http://localhost:5000/api/get_product');
        setProducts(response.data.products);
      } catch (error) {
        console.log("Internal Server Error", error);
      }
    }
    fetchProducts();
    if(token){
      isValidToken(token);
    } 
  }, []);


  // Product Delete
  const handleDeleteProduct = async(productId) => {
    try {
      const response = await axios.post(`http://localhost:5000/api/delete_product/${productId}`);
      if(response.status === 200){
        alert("Product Deleted")
        // Update the products state by removing the deleted product
        setProducts(products.filter(product => product._id !== productId));
      } else {
        alert("Please try again")
      }
    } catch (error) {
      console.log("Internal Server Error", error);
    }
  }

  return (
    <div className='w-full'>

      <div className='w-full h-20 bg-slate-950 text-white flex items-center justify-between'>
        <div id='logo' className='ml-12 text-2xl font-bold cursor-pointer max-lg:ml-4'>
            Dashboard
        </div>

        <div className='flex items-center justify-between mr-12 basis-2/12 font-semibold max-lg:mr-4 max-lg:basis-6/12 max-lg: text-sm'>

            
            {
              token ? <div className='text-red-400 cursor-pointer' onClick={handleLogout}>Log Out</div> : null
            }

            {/* Redirect to /add_product page on click */}
            <div  onClick={handleCheckUser} className='py-1 px-6 border-2 border-white rounded-lg cursor-pointer max-lg:px-2 hover:scale-110'>Add Product</div>
        </div>
      </div>

      <div className='my-6 max-md:mx-2 mx-20 flex flex-col justify-center items-center'>
        { products.map((product) => {
            return (
              <div key={product._id} className='w-4/12 max-md:w-11/12 border-2 rounded flex items-center justify-between mb-4 py-2 max-md:px-2 px-12' >
                <div className='font-semibold basis-2/6'>{product.title}</div>
                <div>{product.category}</div>
                <div>&#8377;{product.price}</div>

                {/* on click it send _id to delete product */}
                <div onClick={ () => handleDeleteProduct(product._id) }>
                  <MdOutlineDeleteOutline className='text-xl text-red-500 cursor-pointer hover:scale-110' />
                </div>
              </div> 
           )
        })
        } 
      </div>
        
    </div>
  )
}

export default page