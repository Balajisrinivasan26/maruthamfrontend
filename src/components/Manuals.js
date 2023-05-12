import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { Outlet, Link } from "react-router-dom";
// import Navbar from '../../Navbar/Navbar';
// import Footer from '../../Footer/Footer';
import "../App.css"
const Manual = () => {
    const {id} = useParams();
    const [data, setData] = useState([]);
    const [search,setSearch] = useState('');
    console.log(id)
    const getData = ()=>{
        fetch(`http://localhost:7000/api/v1/products/${id}`,{
            mode: 'cors',
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            }
        })
        .then(async(data1)=>{
            const course = await data1.json();
            console.log(course.data.product)
            setData(course.data.product)
        })
    }
    useEffect(()=>{
        getData()
    },[])
  return (
    <>
       {/* <Navbar/> */}
    {/* <div className='search-box'>
        <input className='form-control' type="search" name="" id="" onChange={(event)=>{setSearch(event.target.value)}} />
    </div> */}
    <div className='course-catalog card-group container'>

        { 
        <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
        <div className='flex flex-col lg:flex-row'>
          <div className=' bg-green-200 lg:ml-8 xl:ml-[135px] flex flex-col items-counter lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
          <b><div style={{margin:"5px"}}>Name : {data.name}</div></b>
         <b> <div style={{margin:"5px"}}>Cost : {data.cost}</div></b>
         <b> <div style={{margin:"5px"}}>Description : {data.description}</div></b>
         <b> <div style={{margin:"5px"}}>QuantityType : {data.quantityType}</div></b>
        <b> <div style={{margin:"5px"}}>ShortDescription : {data.shortDescription}</div></b>
        <b> <div style={{margin:"5px"}}>PackSize : {data.packSize}</div></b>
        <b> <div style={{margin:"5px"}}>PackType : {data.packType}</div></b>
        <b> <div style={{margin:"5px"}}>Usage : {data.usage}</div></b>
        <b> <div style={{margin:"5px"}}>Dose : {data.dose}</div></b>
        <b> <div style={{margin:"5px"}}>Solubility : {data.solubility}</div></b>
        <b> <div style={{margin:"5px"}}>Features : {data.features}</div></b>
        <b> <div style={{margin:"5px"}}>Application : {data.application}</div></b>
          </div>
          <div >
            <img src={data.image} alt=''/>
          </div>
        </div>
        {/* <Search/> */}
      </section>  

            // <Link to ={`/overview/${item._id}`}>
                // <div className="card course course-card" key={data._id}>
                // <div className="course-img">
                // <img src={data.image} alt=""  />
                // </div>
                // <div className="card-body">
                // <b><div style={{margin:"5px"}}>Name : {data.name}</div></b>
                // <b> <div style={{margin:"5px"}}>Cost : {data.cost}</div></b>
                // <b> <div style={{margin:"5px"}}>Description : {data.description}</div></b>
                // <b> <div style={{margin:"5px"}}>QuantityType : {data.quantityType}</div></b>
                // <b> <div style={{margin:"5px"}}>ShortDescription : {data.shortDescription}</div></b>
                // <b> <div style={{margin:"5px"}}>PackSize : {data.packSize}</div></b>
                // <b> <div style={{margin:"5px"}}>PackType : {data.packType}</div></b>
                // <b> <div style={{margin:"5px"}}>Usage : {data.usage}</div></b>
                // <b> <div style={{margin:"5px"}}>Dose : {data.dose}</div></b>
                // <b> <div style={{margin:"5px"}}>Solubility : {data.solubility}</div></b>
                // <b> <div style={{margin:"5px"}}>Features : {data.features}</div></b>
                // <b> <div style={{margin:"5px"}}>Application : {data.application}</div></b>
                    
                    
                // </div>
                // </div>
            // </Link>

        }
    </div>
    {/* <Footer/> */}
    </>
  )
}
export default Manual