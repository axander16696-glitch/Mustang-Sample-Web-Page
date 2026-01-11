import React, { useState } from 'react'
import './Product.css'

function Product({data}) {
  const [cart,setCart] = useState("Add to cart");
  const[classs,setclasss]=useState("Addbutton");
  const[classs1,setclasss1]=useState("Product");
  return (
    <div className={classs1}>
        <h3>{data.name}</h3>
        <img src={data.src} alt="Image"/>
        <h3>Price ${data.price}</h3>       
        <button className={classs} onClick={() => {setCart("Added"); 
        setclasss("Addbutton1");
        setclasss1("Product1")}}>
        {cart}</button>
      
    </div>
    
  )
 
}

export default Product