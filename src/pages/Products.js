import React from 'react'
import { useGetAllProductsQuery } from '../features/productsApi'
import '../styles/Product.css'
import { refresh } from '../features/refreshSlice'
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react'


export default function Products() {

  const {data: getProducts, refetch } = useGetAllProductsQuery()
  console.log(getProducts)

  const refreshed = useSelector((state) => state.refresh.refreshState)


  useEffect(() => {
    refetch()
    }, [refreshed])

  return (
    <div className='page-products flex items-center justify-center mt-10'>
      {getProducts?.response?.length > 0 ?
      getProducts?.response?.map((product) => {
        return(
          <div className="w-10/12 h-full mx-auto m-5">
              <div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img className="rounded-t-lg p-8" src={product?.photo} alt="product image"/>
                    </a>
                  <div className="px-5 pb-5">
                    <a href="#">
                      <h1 className='text-2xl font-semibold'>{product?.model}</h1>
                      <h3 className="text-gray-900 font-semibold  tracking-tight dark:text-white">{product?.description}</h3>
                    </a>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-gray-900 dark:text-white">${product?.price}</span>
                      <a href="#"
                        className="text-white bg-black hover:bg-yellow-400   font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add
                        to cart</a>
                    </div>
                  </div>
              </div>
              </div>
        )        
      })   : <div className="no-activities">
      <p className='w-full m-10 text-center text-3xl'>There are no products</p>
    </div>    
      }   
</div>
  )
}
