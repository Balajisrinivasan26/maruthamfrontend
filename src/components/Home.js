import React from 'react';
import Banner from '../components/Banner'
import About from './About';
import Product from './Products'
 import Rating from './Rating';
import ContactForm from './Contact';
import Admin from './Admin';
import ShoppingCart from './ShoppingCart';
import { FcCollect } from 'react-icons/fc';

function Home()  {
  return( <div>
    <Banner/>
    <About/>
    <Rating/>
    {/* <br></br>
    <br></br><div className='grid-container'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62655.37627388419!2d76.91870783880962!3d11.041549660091412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba858fa37fede13%3A0x68395c315480220d!2sMarutham%20Bio%20AgeS%20Innovations%20(P)%20Ltd!5e0!3m2!1sen!2sin!4v1683711504837!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe><br></br><br></br>
    
    
    </div> */}
    <section className="text-center m-3">
    <h2 className="text-3xl font-bold mb-4">Locate  Us</h2>
    <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
      <div className='flex flex-col lg:flex-row'>
      <div className='hidden flex-1 lg:flex justify-end items-end'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62655.37627388419!2d76.91870783880962!3d11.041549660091412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba858fa37fede13%3A0x68395c315480220d!2sMarutham%20Bio%20AgeS%20Innovations%20(P)%20Ltd!5e0!3m2!1sen!2sin!4v1683711504837!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe><br></br><br></br>
        </div>
        <div className='mt-5 lg:ml-8 xl:ml-[135px] flex flex-col items-counter lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
            <h2 style={{fontSize:"35px",fontFamily:"cursive"}}>Reach Us On<FcCollect/></h2>
            <p style={{marginTop:"10px",fontSize:"20px"}}>Sree Veerakumar Arcade 41-1, Balasundaram Road, Near Kovai towers, Sengadu, Pappanaicken Palayam, Coimbatore-641018, Tamil Nadu, India</p>
            <h2 style={{marginTop:"10px",fontSize:"20px"}}>K.M Aravinthan(Director)</h2>

        </div>
       
      </div>
      {/* <Search/> */}
    </section>

   
   
  </section>

    {/* <ContactForm/>
    <Admin/> */}
    {/* <ShoppingCart/> */}
    
  </div>);
};

export default Home;