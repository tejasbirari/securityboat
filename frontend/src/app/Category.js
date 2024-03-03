import React from 'react'

const Category = ({ handleCategoryClick }) => {
  return (
    <div className='h-12 bg-slate-200 flex items-center justify-center'>

        <div className='basis-3/12 max-md:basis-8/12 flex items-center justify-between'>

            <div className='font-semibold cursor-pointer hover:scale-110' onClick={ () => handleCategoryClick('Cloths')} >Cloths</div>

            <div className='font-semibold cursor-pointer hover:scale-110' onClick={ () => handleCategoryClick('Electronics')} >Electronics</div>

            <div className='font-semibold cursor-pointer hover:scale-110' onClick={ () => handleCategoryClick('Toys')} >Toys</div>

        </div>
        
    </div>
  )
}

export default Category