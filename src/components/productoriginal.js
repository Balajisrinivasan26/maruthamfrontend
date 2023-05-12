 //import React from 'react';

// import {BiBed,BiBath,BiArea} from 'react-icons/bi'
// import {ImPriceTag} from 'react-icons/im'
// import {FcAbout} from 'react-icons/fc'
// const Products = ({product}) => {
//   const {name,cost,about,img,}=product;

//   return (
//   <div className='bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition ' >
//     <img className='mb-8'src={img} alt=''></img>
//     <div className='mb-4 flex-gap-x-2 text-sm'>
//       <div>{name}</div>
      

//     </div>
   
//     <div className='flex gap-x-4 my-4'>
      
//     </div>
//     <div className='flex items-center gap-1'>
//       <div>
//       <ImPriceTag/>
//       </div>
//       <div>{cost}</div>
//     </div>
//     <div className='flex items-center gap-1'>
//       <div>
//       <FcAbout/>
//       </div>
//       <div>{about}</div>
//     </div>
   
//   </div>);
// };
import React, { useEffect, useState } from "react"
import axios from "axios"
import {ImPriceTag} from 'react-icons/im'
import {FcAbout} from 'react-icons/fc'
import { Link } from "react-router-dom"
import { MDBBtn } from 'mdb-react-ui-kit';

const Products = () => {
  
  const [product, setproduct] = useState([]);
  const [loading,setLoading] = useState(false)

  const fetchUserData = async() => {
    setLoading(true);
    let response = await axios.get("http://localhost:7000/api/v1/products")
          .then(res => { console.log(res); setproduct(res.data.data["Products"])}).catch((err)=>{
            console.log(err)
          })

          setLoading(false)
  }
  

  useEffect(() => {
    fetchUserData()
  }, [])
// console.log(product.data['Products'])

if(loading)
{
  return <div>Loading...</div>
}

// if(product)
// {
//   console.log(product.data["Products"])
// }

  return (
    
    <div>
      <></>
      
      <h2 className="text-3xl font-bold mb-4 text-center">Products</h2>
      
      {product.length > 0 && (
        
              <div style={{display:"grid",gridTemplateColumns:"repeat(3, 1fr)" }} >
              {product.map(product => (
                <>
                {/* <img src={product.image} />
                <li key={product.name}>{product.name + product.cost}</li> */}
                
                <div className='bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition ' >
      <img className='mb-8'src={product.image} alt='' style={{width:"fit-content"}}></img>
        <div className='mb-4 flex-gap-x-2 text-sm'>
        <div>{product.name}</div>

      </div>
      
      <div className='flex gap-x-4 my-4'>
            </div>
        <div className='flex items-center gap-1'>
          <div>
          

          <ImPriceTag/>
          </div>
          <div>{product.cost}</div>
        </div>
        <div className='flex items-center gap-1'>
          <div>
          <FcAbout/>
          </div>
          <div>{product.shortDescription}</div>
          
        </div>
        <br></br>
        <div style={{"textAlign":"center","color":"red"}}><Link to={`/manual/${product._id}`} >Manual (Full details)</Link>
        <div><MDBBtn className='me-1'>Add to cart</MDBBtn></div>
        </div>

      </div>
      
                </>
              ))}
              
            </div>
            
      )}
    </div>
  );
          }



export default Products;
