import React from 'react'
import "./Confirmed.css"
import confirmOrderImage from "../../assets/icon-order-confirmed.svg"

const Confirmed = ({cartItems,totalValue,newOrder}) => {
  
  return (
    <>
     <section className='order-confirmed'>
        <img className='confirmed-svg' src={confirmOrderImage} alt="order-was-confirmed" />
        <h3 className='fw-bold fs-2'>Order Confirmed</h3>
        <p>we hope you enjoy your food!</p>
        <div className='background-one'>
        {cartItems.map((item,index)=>(
        <div className='confirm-order-images d-flex  justify-content-between' key={index}>
          <div className='left-side-items d-flex ms-2 mt-2 '>
          <img className='dessert-image' src={item.image.desktop}/>
          <div className='dessert-name-quanity-price flex-column ms-3'>
          <p className='dessert-name mb-1'>{item?.name}</p>
          <div className='d-flex lh-1  '>
          <p className="dessert-quantity">{item.quantity}x</p>
          <p className="dessert-price ms-3 ">@${item.price}</p>
          </div>
          </div>
          </div>
          <p className="deesert totalPrice mt-3 mx-2">${item.sumOfPrice}</p>
          
          
        </div>
        
        ))}
        <div className="order-name-price d-flex justify-content-between">
            <p className="order-total-name ms-3 mt-2 fw-bold fs-3">Total order</p>
            <p className="order-total-price  mt-2 fw-bold fs-3">${totalValue}</p>
          </div>
        
        <button className="start-next-order w-100" onClick={newOrder} >Start New order</button>
        </div>
     </section>
    </>
  )
}

export default Confirmed
