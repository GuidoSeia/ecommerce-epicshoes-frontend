import React from 'react'
import { useGetAllProductsQuery } from '../features/productsApi'


export default function Products() {

  let { data: allProducts, refetch } = useGetAllProductsQuery()
  console.log(allProducts)



  return (
    <div className='flex items-center justify-center'>
        <div className="w-10/12 mx-auto m-5">
          <div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img class="rounded-t-lg p-8" src="https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp" alt="product image"/>
                </a>
              <div className="px-5 pb-5">
                <a href="#">
                  <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">Apple Watch Series 7
                    GPS, Aluminium Case, Starlight Sport</h3>
                </a>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                  <a href="#"
                    className="text-white bg-black hover:bg-yellow-400   font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add
                    to cart</a>
                </div>
              </div>
          </div>
    </div>
</div>
  )
}
