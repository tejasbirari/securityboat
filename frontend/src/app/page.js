'use client'
import { useEffect, useState } from "react";
import Category from "./Category";
import Topbar from "./Topbar";
import axios from "axios";
import { useRouter } from 'next/navigation';
import { jwtDecode } from "jwt-decode";

export default function Home() {
  // store reterived products data in array
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const router = useRouter();

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
  }, []);

   // Filter products based on selected category
   useEffect(() => {
    if (selectedCategory) {
      const filtered = products.filter(product => product.category === selectedCategory);
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [selectedCategory, products]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // check if token is valid or not
  const isValidToken = (token) => {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    if(decodedToken.exp < currentTime){
      localStorage.removeItem('Token');
      return false;
    }
    return true;
  }

  const handleBuyNow = (price, id) => {
    const token = localStorage.getItem('Token');
    if (token && isValidToken(token)) {
      //  if user is logged in & token is valid, redirect to checkout page
      router.push(`/checkout/?price=${price}&id=${id}`)
    } else {
      alert('Please log in to proceed');
    }
  }

 

  return (
    <main id="homepage">
      <Topbar />
      <Category handleCategoryClick={handleCategoryClick} />

      <div className="w-full flex items-center justify-center">
        <div className="w-10/12 my-12 flex flex-wrap max-md:flex-col items-center gap-4">

        { filteredProducts.map((product) => {
            return (
              <div key={product._id} className='w-2/12 max-md:w-11/12 border-2 border-slate-300 rounded-lg mb-4 py-2 px-6 max-md:px-2' >
                <div>
                  <img className="w-80 h-48 object-contain" 
                    src={product.image} alt={product.title} />
                </div>
                <div className="flex items-center justify-between font-bold">
                  <div>{product.title}</div>
                  <div>&#8377;{product.price}</div>
                </div>
                <div className="text-sm text-slate-600">{product.category}</div>
                  <div className="mt-2 mx-2 py-1 px-6 rounded-lg border-2 border-slate-200 hover:scale-105 hover:border-slate-400 cursor-pointer text-center "
                  onClick={ () => handleBuyNow(product.price, product._id) }
                > Buy Now</div>
              </div> 
           )
        })
        } 

        </div>
      </div>

    </main>
  );
}
