import { useEffect } from 'react';
import { useState } from 'react'


import './App.css'
import AddToCart from './Component/AddToCart/AddToCart'
import Confirmed from './Component/Confirmed Order/Confirmed';
import ProductList from './Component/ProductList/ProductList'

function App() {
  const [cartItems, setCartItems] = useState([]);
  const[totalCartItemPrice, setTotalCartItemPrice] = useState(0);
  const[IsConfirmedOrder, setIsConfirmedOrder] = useState(false);
  useEffect(()=>{
    const cartItemTotalPrice = cartItems.reduce((sum,total)=> sum + total.sumOfPrice,0);
    setTotalCartItemPrice(cartItemTotalPrice);
  },[cartItems])
 
 console.log(`you have to know   ${totalCartItemPrice}`);
  
 const handleDelete = (id)=>{
  setCartItems(cartItems.filter((item) => item.id !== id));
 }
 const handleAddToCart = (product) => {
  setCartItems(prevItems => {
 const isItemInCart = prevItems.find(item => item.id === product.id);

 if (isItemInCart) {
   return prevItems.map(item =>
     item.id === product.id
       ? { ...item, quantity: item.quantity + 1, sumOfPrice: (item.quantity + 1) * item.price,}
       : item
   );
 }
 return [...prevItems, { ...product, quantity: 1, sumOfPrice: product.price, }];
});
};

  const startNewOrder = ()=> {
    setCartItems([]);
    setTotalCartItemPrice(0);
    setIsConfirmedOrder(false);
    
  }
  const confirm = ()=>{
    setIsConfirmedOrder(true)
  }
  //lets me explain you how handleAddToCart works first we find the product in the cart if it is there we increment the quantity if not we add it to the cart
 
  return (
    <>
    <main>
      <ProductList addToCart={handleAddToCart}/>
      <AddToCart  cartItems = {cartItems} handleDelete= {handleDelete} totalValue = {totalCartItemPrice}  confirmOrder= {confirm} />
      
    </main>
   {IsConfirmedOrder && <Confirmed cartItems = {cartItems}  totalValue={totalCartItemPrice} newOrder = {startNewOrder} /> }   {/*oky there is problem when i use confirmed in main that its render inside of main but i want that when i click the bu
   button in addtocart then if IsconfirmedOrder is true then you have to display it */}
    
    </>
  )
}

export default App
