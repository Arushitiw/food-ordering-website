import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/storeContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
const navigate=useNavigate();
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className='cart-item-title cart-items-item'>
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>₹{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>₹{item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className='remove-btn'>X</p>
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Order Summary</h2>
          <div>
            <div className="cart-total-details">
              <p>Items Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Charges</p>
              <p>{getTotalCartAmount()===0?0:20}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Grand Total</b>
              <b>₹{getTotalCartAmount()===0?0:getTotalCartAmount()+20}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order ')}>Complete My Order</button>
        </div>

        <div className="cart-promo-code">
          <div>
            <p>Got a discount code? Use it below!</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='Type your coupon here...' />
              <button>Apply Code</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
