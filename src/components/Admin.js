import React, { useEffect, useState } from "react";
import "./Admin.css";

function Admin() {
  const [image, setImage] = useState("");
  const [allImage, setAllImage] = useState([]);
  const [name, setname] = useState("");
  const [cost, setcost] = useState("");
  const [dose, setdose] = useState("");
  const [usage, setusage] = useState("");
  const [quantityType, setquantityType] = useState("");
  const [shortDescription, setshortDescription] = useState("");
  const [description, setdescription] = useState("");
  const [packSize, setpackSize] = useState("");
  const [packType, setpackType] = useState("");
  function convertToBase64(e) {
    console.log(e);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      setImage(reader.result);
    };
    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
  }

 async function uploadImage() {
   try{
   const res = await fetch("http://localhost:7000/api/v1/products",{
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        image,
        name,cost,quantityType,shortDescription,description,packSize,packType,usage,dose
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

      console.log("res",res);
      // window.location.replace("http://localhost:3000/products")
  }
  catch(err){
    console.log("error",err);
  }
  }
  return (
    <div className="product-wrapper">
      <div class="productCard">
        <label>Name : </label>
        <input
          type="text"
          value={name}
          className="sigin-input-name"
          onChange={(e) => setname(e.target.value)}
        ></input>
        <br></br>
        <label>Cost : </label>
        <input
          type="number"
          value={cost}
          onChange={(e) => setcost(e.target.value)}
        ></input>
        <br></br>
        <label>Quantity type: </label>
        <input
          type="text"
          value={quantityType}
          onChange={(e) => setquantityType(e.target.value)}
        ></input>
        <br></br>
        <label>Short Description : </label>
        <input
          type="text"
          value={shortDescription}
          onChange={(e) => setshortDescription(e.target.value)}
        ></input>
        <br></br>
        <label>Description : </label>
        <input
          type="text"
          value={description}
          onChange={(e) => setdescription(e.target.value)}
        ></input>
        <br></br>
        <label>Pack Size:</label>
        <input
          type="text"
          value={packSize}
          onChange={(e) => setpackSize(e.target.value)}
        ></input>
        <br></br>
        <label>packType:</label>
        <input
          type="text"
          value={packType}
          onChange={(e) => setpackType(e.target.value)}
        ></input>
        <br></br>
        <label>usage:</label>
        <input
          type="text"
          value={usage}
          onChange={(e) => setusage(e.target.value)}
        ></input>
        <br></br>
        <label> dose:</label>
        <input
          type="text"
          value={ dose}
          onChange={(e) => setdose(e.target.value)}
        ></input>
        <br></br>
        Let's Upload Image
        <br />
        <br></br>
        <input accepts="image/*" type="file" onChange={convertToBase64}></input>
        {image == "" || image == null ? (
          ""
        ) : (
          <img width={100} height={100} src={image}></img>
        )}
        <br></br>
        <button onClick={uploadImage} id="file">
          Submit
        </button>
      </div>
    </div>
  );
}
export default Admin;