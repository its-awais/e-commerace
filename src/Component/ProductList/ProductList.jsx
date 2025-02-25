import React from 'react'
import "./ProductList.css";
import addtocart from "../../assets/icon-add-to-cart.svg"

import { useEffect } from 'react';
import axios from "axios";
import { useState } from 'react';
const ProductList = ({addToCart}) => {
    const [productData,setProductData] = useState([]);
    useEffect(()=>{
            axios.get("/api/productsList")
            .then((Response)=>{
              setProductData(Response.data);
            }).catch((error)=>{
                console.log("you got the error",error)
            })
    },[])//useEffect use([]) this to run one time when first time page load
  return (
    <>
    
    <section className ="dessert-Area">
    <h1 className='fw-bold mb-4'>Desserts</h1>
    {productData.map((products,index)=>( 
        <div className='allProducts' key={index}>
    <img className='desert-image' src={products.image.desktop} loading="lazy" alt="Deserts images" />
    <button className='add-to-cart-btn px-2 py-1' onClick={()=> addToCart(products)}><img className='add-to-card-img' src={addtocart} alt="add to cart"  />Add to Cart</button>
    <div className='product-details mt-2 w-100 '>
    <p className='productCategory mt-4'>{products.category}</p>
    <p className='productName'>{products.name}</p>
    <p className='productPrice mb-2'>{`$${products.price}`}</p>
    </div>
    </div>
    
   ))}
   </section>
   
    </>
  )
}

export default ProductList
