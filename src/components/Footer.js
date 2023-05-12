import React from 'react'
import logo from '../assests/logo.png'

export default function Footer() {
  return (
    <div>

<footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
    <div className="w-full container mx-auto p-4 md:px-6 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            {/* <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0"> */}
                <img src={logo} className="h-8  dark:text-white" alt=" Logo" />
                <span className=" text-2xl font-semibold  dark:text-white">Marutham Bio-Ages</span>
            
            <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                {/* <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">Product</a>
                </li> */}
                {/* <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">About Us</a>
                </li> */}
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">↑</a>
                </li>
                {/* <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">Cart</a>
                </li> */}
               
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">copyright©All Rights Reserved.</span>
    </div>
</footer>

      
    </div>
  )
}



