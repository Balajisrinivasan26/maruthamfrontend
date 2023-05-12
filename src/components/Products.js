import React, { useEffect, useState } from "react";
import { ImPriceTag } from "react-icons/im";
import { FcAbout } from "react-icons/fc";
import { Link } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";
import {BsFillCartCheckFill} from 'react-icons/bs'
// import CartPopup from "./CartPopup";

const Products = () => {
  const [product, setproduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const fetchUserData = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://victorious-trunks-newt.cyclic.app/api/v1/products");
      const data = await response.json();
      setproduct(data.data["Products"]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  function handleAddToCart(product) {
    const existingItem = cartItems.find((item) => item._id === product._id);

    if (existingItem) {
      existingItem.quantity++;
      setCartItems([...cartItems]);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  }

  function handleRemoveFromCart(item) {
    const newCartItems = cartItems.filter((cartItem) => cartItem !== item);
    setCartItems(newCartItems);
  }

  function handleClearCart() {
    setCartItems([]);
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 text-center">Products</h2>
      {product.length > 0 && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
          {product.map((product) => (
            <div
              className="bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition"
              key={product._id}
            >
              <img
                className="mb-8"
                src={product.image}
                alt=""
                style={{ width: "fit-content" }}
              ></img>
              <div className="mb-4 flex-gap-x-2 text-sm">
                <div>{product.name}</div>
              </div>
              <div className="flex gap-x-4 my-4"></div>
              <div className="flex items-center gap-1">
                <div>
                  <ImPriceTag />
                </div>
                <div>{product.cost}</div>
              </div>
              <div className="flex items-center gap-1">
                <div>
                  <FcAbout />
                </div>
                <div>{product.shortDescription}</div>
              </div>
              <br></br>
              <div style={{ textAlign: "center", color: "red" }}>
                <Link to={`/manual/${product._id}`}>Manual (Full details)</Link>
                <div>
                  <MDBBtn className="me-1" onClick={() => handleAddToCart(product)}>
                    Add to cart
                  </MDBBtn>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {cartItems.length > 0 && (
        <CartPopup cartItems={cartItems} onRemove={handleRemoveFromCart} onClear={handleClearCart} />
        )}
      </div>
    );
  }
  
  export default Products;
  
  function handleAddToCart(product) {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const existingItem = cartItems.find((item) => item._id === product._id);
  
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cartItems.push({ ...product, quantity: 1 });
    }
  
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }
  
  function handleRemoveFromCart(productId) {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems = cartItems.filter((item) => item._id !== productId);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }
  
  function handleClearCart() {
    localStorage.removeItem("cartItems");
  } 
  
  function CartPopup(props) {
    const [isOpen, setIsOpen] = useState(false);
    const { cartItems, onRemove, onClear } = props;
  
    const handleOpen = () => {
      setIsOpen(true);
    };
  
    const handleClose = () => {
      setIsOpen(false);
    };
  
    return (
      <>
        <div className="fixed bottom-5 right-5 bg-blue-500 p-3 rounded-full text-white cursor-pointer">
          <span className="text-xl">{cartItems.length}</span>
          <MDBBtn className="me-1" onClick={handleOpen}>
          <BsFillCartCheckFill/>
          </MDBBtn>
        </div>
        {isOpen && (
          <div className="fixed bottom-20 right-5 p-3 bg-white border border-gray-300 shadow-lg rounded-md max-h-800 overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">Cart Items</h2>
            <ul>
              {cartItems.map((item) => (
                <li key={item._id}>
                  <div className="flex items-center mb-2">
                    <img className="w-24 h-24 object-cover" src={item.image} alt={item.name} />
                    <div className="flex flex-col ml-4">
                      <h3 className="text-lg font-bold">{item.name}</h3>
                      <p className="text-gray-500">{item.shortDescription}</p>
                      <div className="flex items-center mt-2">
                        <button className="bg-red-500 text-white px-2 py-1 rounded-full" onClick={() => onRemove(item._id)}>
                          -
                        </button>
                        <span className="mx-2">{item.quantity}</span>
                        <button className="bg-green-500 text-white px-2 py-1 rounded-full" onClick={() => handleAddToCart(item)}>
                          +
                        </button>
                        <span className="mx-2">{item.cost * item.quantity}</span>
                      </div>
                    </div>
                  </div>
                  <hr className="my-2" />
                </li>
              ))}
            </ul>
            <div className="text-right mt-4">
              <button className="text-red-500 font-bold" onClick={onClear}>
                Clear Cart
              </button>
              <button className="bg-blue-500 text-white font-bold ml-4">
                Checkout
              </button>
            </div>
            <button className="absolute top-0 right-0" onClick={handleClose}>
              X
            </button>
          </div>
        )}
      </>
    );
  }