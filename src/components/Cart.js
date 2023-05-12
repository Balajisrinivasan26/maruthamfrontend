import React from 'react';
import { Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { RiDeleteBinLine } from 'react-icons/ri';

function CartPopup(props) {
  const { cartItems} = props;
//   console.log(cartItems)
const items1 = localStorage.getItem('cartItems');
console.log(items1)

console.log(items1["name"])

  return (
    <div>
      
      <h2>Cart Items</h2>
      
      {cartItems ? (
        cartItems.map((item) => (
          <div key={item._id}>
            <p>{item.name}</p>
            <p>Quantity: {item.quantity}</p>
            {/* <button onClick={() => onRemove(item)}>Remove</button> */}
          </div>
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
      <Link to="/checkout">
        <button>Checkout</button>
      </Link>
      {/* <button onClick={onClear}>Clear Cart</button> */}
    </div>
  );
}

export default CartPopup;
