'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { MdOutlineDeleteOutline } from "react-icons/md";
import { jwtDecode } from "jwt-decode";
import requireAdminAuth from '../requiredAdminAuth';

const page = () => {

  const router = useRouter();

  // store reterived products data in array
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  // function to logout admin
  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    router.push('/');
  }

  // this will fetch products every time page gets refresh
  useEffect(() => {

    // fetch products
    const fetchProducts = async() => {
      try {
        const response = await axios.get('http://localhost:5000/api/get_product');
        setProducts(response.data.products);
      } catch (error) {
        console.log("Internal Server Error", error);
      }
    }

    // fetch orders
    const fetchOrders = async() => {
      try {
        const token = localStorage.getItem('adminToken');
        console.log(token);
        const response = await axios.get('http://localhost:5000/api/order_info', {
          headers: {
            Authorization: `Bearer ${token}`
          }});
        setOrders(response.data.orders);
      } catch (error) {
        console.log("Internal Server Error", error);
      }
    }

    fetchProducts();
    fetchOrders();
  }, []);

  const handleCheckAdmin = () => {
    router.push('add_product')
  }

  // product delete
  const handleDeleteProduct = async(productId) => {
    try {
      const response = await axios.post(`http://localhost:5000/api/delete_product/${productId}`);
      if(response.status === 200){
        alert("Product Deleted")
        // update the products state by removing the deleted product
        setProducts(products.filter(product => product._id !== productId));
      } else {
        alert("Please try again")
      }
    } catch (error) {
      console.log("Internal Server Error", error);
    }
  }

  // place order
  const handlePlaceOrder = async(orderId) => {
    try {
      const response = await axios.post(`http://localhost:5000/api/place_order/${orderId}`);
      if(response.status === 200){
        alert("Order Placed")
        // update the orders state by removing the placed order
        setOrders(orders.filter(order => order._id !== orderId));
      } else {
        alert("Order not placed")
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
            <div className='text-red-400 cursor-pointer' onClick={handleLogout}>Log Out</div>

            {/* Redirect to /add_product page on click */}
            <div  onClick={handleCheckAdmin} className='py-1 px-6 border-2 border-white rounded-lg cursor-pointer max-lg:px-2 hover:scale-110'>Add Product</div>
        </div>
      </div>


      <div className='w-full flex max-md:items-center max-md:flex-col'>

        <div className='basis-6/12 max-md:w-full my-6 max-md:mx-2 mx-20 flex flex-col justify-center items-center'>
          { products.map((product) => {
              return (
                <div key={product._id} className='w-11/12 max-md:w-11/12 border-2 rounded flex items-center justify-between mb-4 py-2 max-md:px-2 px-12' >
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


        <div className='basis-6/12 max-md:w-full my-6 max-md:mx-2 mx-20 flex flex-col max-md:justify-center max-md:items-center'>
          { orders.map((order) => {
              return (
                <div key={order._id} className='w-12/12 max-md:w-11/12 border-2 rounded flex items-center justify-between mb-4 py-2 max-md:px-2 px-12' >
                  <div className='flex flex-col text-center max-md:basis-4/12'><span className='font-semibold'>Order ID</span>{order.orderId}</div>
                  <div className='flex flex-col text-center'><span className='font-semibold'>Order</span> {order.orderStatus}</div>

                  {/* on click it send _id to delete product */}
                  <div className='bg-green-400 py-1 px-6 max-md:px-2 border-2 border-black rounded-lg text-sm font-semibold text-slate-800 cursor-pointer hover:scale-110' onClick={ () => handlePlaceOrder(order._id) }>
                    Place Order
                  </div>
                </div> 
            )
          })
          } 
        </div>

      </div>

      
        
    </div>
  )
}

export default requireAdminAuth(page)