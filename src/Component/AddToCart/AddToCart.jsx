import React from 'react'
import "./AddToCart.css";
import removeItemSvg from "../../assets/icon-remove-item.svg"
import carbonneutralSvg from '../../assets/icon-carbon-neutral.svg'

      const AddToCart = ({cartItems,handleDelete,totalValue,confirmOrder}) => {   
  return (
    <>
   <section className='AddToCart-section'>
   <h2>{`Your Cart(${cartItems.length})`}</h2>
   {cartItems.map(item => (
   <div className='cart-details' key= {item.id}>
    <p className='cartItemName fw-bold '>{item?.name}</p>
    <div className='item-price-sumOfPrice-removeItem d-flex justify-content-between'>
    <div className="flex lh-1">
    <p className='ItemClick fw-bold'>{`${item.quantity}x`}</p>
    <p className='Item-price'>{`@$${item.price}`}</p>
    <p className='sumOfPrice'>{`$${item.sumOfPrice}`}</p>
    </div>
    <img  src={removeItemSvg} alt="Remove Icon" className='mb-4 remove-svg ' onClick={()=> handleDelete(item.id)} />
   </div>
     
   </div>
   ))}
   <div className='total-item-price fs-3 my-3 d-flex justify-content-between'>
   <p className='total-price-name fw-semibold'>{`total order $`}</p>
   <p className='total-price fw-bold'>${totalValue}</p>
   </div>
   <div className=' d-flex'>
  <img src={carbonneutralSvg} alt="delivery svg" className="carbon-neutral-svg mx-2" />
  <p className='carbon-neutral-text mt-3'>The is carbon neutral delivery</p>
   </div>
   <button className='conformation w-100  p-1' onClick={confirmOrder}>Confirm Order</button>
   </section>
    </>
  )
}

export default AddToCart
