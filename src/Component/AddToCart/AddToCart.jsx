import React from 'react'
import { useState } from 'react';
import "./AddToCart.css";
      const AddToCart = ({cartItems}) => {    
  return (
    <>
   <section className='AddToCart-section'>
   <h2>{`Your Cart(${cartItems.length})`}</h2>
   {cartItems.map(item => (
   <div className='cart-details' key= {item.id}>
    <p className='cartItemName'>{item?.name}</p>
    <p className='ItemClick'>{`${item.quantity}x`}</p>
   </div>
   ))}
   </section>
    </>
  )
}

export default AddToCart
