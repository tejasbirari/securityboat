'use client'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { jwtDecode } from "jwt-decode";

const page = () => {

    let token = null;
    const router = useRouter();

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);

    // function used for converting image into base64 format
    const handleImageUpload = (e, setImageFunction) => {
        try {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result;
                setImageFunction(base64String);
            };
            reader.readAsDataURL(file)
        } catch (error) {
            console.log(error);
        }
    }

    // function to handle adding a product
    const handleAddProduct = async() => {
        try {
            const response = await axios.post('http://localhost:5000/api/add_product', { title, category, price, image:selectedImage});
            if(response.status === 200){
                alert("Product Added")
            }else{
                alert("Please try again")
            }
            setTitle('');
            setCategory('');
            setPrice('');
            setSelectedImage(null);
        } catch (error) {
            console.log('Error frontend', error);
        }
    }

    if (typeof window !== 'undefined') {
        // Accessing localStorage only in the browser 
        token = localStorage.getItem('adminToken');
    }

    // function to check if token is valid or not
    const isValidToken = (token) => {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;

        if(decodedToken.exp < currentTime){
        localStorage.removeItem('adminToken');
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
        router.push('/admin');
        alert('Please log in to proceed');
        }
    }

    // check user and redirect accordingly
    useEffect(() => {
        handleCheckUser();
    }, [])


  return (
    <div className='w-screen h-screen flex items-center justify-center bg-black text-white'>
        
        <div className='basis-4/12 max-md:basis-11/12 h-auto border-2 border-white my-32 py-16 rounded-2xl flex flex-col items-center'>

            <div className='mb-4 text-2xl font-bold underline'>ADD PRODUCT</div>

            <div className='flex flex-col'>
                <label className='font-semibold text-lg mt-4'>Title</label>
                <input className='border-2 border-black outline-none py-2 px-4 rounded-lg text-black' 
                    type="text" placeholder='Title' value={title} onChange={ (e) => setTitle(e.target.value) }/>
            </div>

            <div className='flex flex-col'>
                <label className='font-semibold text-lg mt-4'>Category</label>
                <input className='border-2 border-black outline-none py-2 px-4 rounded-lg text-black' 
                    type="text" placeholder='Category' value={category} onChange={ (e) => setCategory(e.target.value) }/>
            </div>

            <div className='flex flex-col'>
                <label className='font-semibold text-lg mt-4'>Price</label>
                <input className='border-2 border-black outline-none py-2 px-4 rounded-lg text-black' 
                    type="text" placeholder='Price' value={price} onChange={ (e) => setPrice(e.target.value) }/>
            </div>

            <div className='flex flex-col items-center justify-center  mt-4'>
                <input className='w-60 outline-none rounded-lg text-white ' 
                    type="file" accept='image/*' name="product_photo" id="product_photo"
                    onChange={ (e) => handleImageUpload(e, setSelectedImage) }
                />
            </div>

            <button className='mt-12 border-2 border-white py-2 px-6 rounded-lg font-semibold hover:scale-110'
                onClick={handleAddProduct}
            >
                ADD
            </button>

        </div>
    </div>
  )
}

export default page