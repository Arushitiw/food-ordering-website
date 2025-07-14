import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/storeContext'
const PlaceOrder = () => {
  const {getTotalCartAmount}=useContext(StoreContext)
  return (
    <div>
      <form action="" className="place-order">
        <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='Your First Name' />
          <input type="text" placeholder='SurName/Last Name' />
        </div>
        <input type="email" placeholder='Email to contact you' />
        <input type="text" placeholder='House No./Street Name'/>
         <div className="multi-fields">
          <input type="text" placeholder='Town/City' />
          <input type="text" placeholder='Provinces/State' />
        </div>
         <div className="multi-fields">
          <input type="text" placeholder='Zip or Pin Code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Mobile Number' />
        </div>
        <div className="place-order-right">
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
              <b>₹{getTotalCartAmount()===0?0: getTotalCartAmount()+20}</b>
            </div>
          </div>
          <button>Place My Yummy Order 🚀</button>
        </div>
        </div>
      </form>
    </div>
  )
}

export default PlaceOrder
