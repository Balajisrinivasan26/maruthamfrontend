import React from 'react'
import image from '../assests/about.jpg'
export default function About() {
  return (
    <section className="text-center m-3">
    <h2 className="text-3xl font-bold mb-4">About Us</h2>
    <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
      <div className='flex flex-col lg:flex-row'>
      <div className='hidden flex-1 lg:flex justify-end items-end'>
          <img  style={{ height:"80%"}}src={image} alt=''/>
        </div>
        <div className='mt-5 lg:ml-8 xl:ml-[135px] flex flex-col items-counter lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
        <p className="text-lg" >Marutham Bio Ages Innovations (P) Limited    was established in 2008 as a manufacture, supplier and wholesaler. We are basically a Private Limited Company. We are offering a wide assortment of Facilitated Enhancer, Vitilizer Fertilizer, Plant Defence Fertilizer and many more. Our products are manufactured by us in bulk and we also supply our products to all over the india as per the demands.
    Our foundation takes into consideration doing smooth creation and speedier conveyance plans, through well form authoritative structure of the organization. It is furnished with ultra-propelled devices that assist us with creating merchandise in monstrous figures. Efficient segregation of entire unit has helped us to conduct our business in smooth and efficient manner. The facility is well-connected with the sound transportation facility that helps to deliver the products in a promised time frame at our customer place.</p>
        </div>
       
      </div>
      {/* <Search/> */}
    </section>

   
   
  </section>
  
  )
}
