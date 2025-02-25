import { useEffect } from 'react';
import { useState } from 'react'


import './App.css'
import AddToCart from './Component/AddToCart/AddToCart'
import ProductList from './Component/ProductList/ProductList'

function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(()=>{
    console.log("Updated cart", cartItems)
  },[cartItems])
  const handleAddToCart = (product) =>{
    console.log("product id is",product)
  setCartItems(prevItems => {
    console.log("prev stats",prevItems)
    const isItemInCart = prevItems.find(item => item.id === product.id);
    console.log("is item in cart",isItemInCart)
    if(isItemInCart){
      return prevItems.map(item => item.id === product.id ? {...item, quantity: item.quantity + 1} : item );
    }
    return [...prevItems, {...product, quantity: 1}];
  })
  }

  return (
    <>
    <main>
      <ProductList addToCart={handleAddToCart}/>
      <AddToCart  cartItems = {cartItems}/>
    </main>
    </>
  )
}

export default App
