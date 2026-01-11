import React from 'react'
import './Middle.css'
import Product from './Product'


function Middle() {
  let productname1={name:"Lenovo",src:"https://m.media-amazon.com/images/I/81tmCrtiRgL._SX679_.jpg",price:200}
  let productname2={name:"hp",src:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR12YewVkf444MhBeVL6qRkX8jrKymWnKonRGNyxpMT4Gn_5iK7ILtUt5V_O489-OQWVWP5IMntqvHawlrbyIKim9JPfJqzGfgnbRs1gpiqL2ztJYEqv2mMVtaVCcSviRDsRA_Id7BG_xo&usqp=CAc",price:150}
  let productname3={name:"Mac Book",src:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ6um3HhOi95bjj0UkUazjZjf7lgw66FkX1CPr52Kj-xDLA9mOHpjMsCwtXYNzRQrqyweFXgD5MEXmqqAhOF3drcZdrVf7j-BBCKgZd1AUq-_MUBCfua5NXEn8tpJEnJx3cj7sOZpWxL1U&usqp=CAc",price:500}
  let productname4={name:"Acer",src:"https://www.myg.in/images/thumbnails/300/300/detailed/42/-original-imagp7w7akzuyg3t.JPEG.png",price:700}  
    return (
    <div className='Middle'>
      <br></br>
    <div className='Main'>
      
        <Product data={productname1}></Product>
        <Product data={productname2}></Product>
        <Product data={productname3}></Product>
        <Product data={productname4}></Product>

    </div>
    <br></br>
    <div className='Main'>
    
        <Product data={productname4}></Product>
        <Product data={productname2}></Product>
        <Product data={productname3}></Product>
        <Product data={productname1}></Product>
      

    </div>
    <br></br>
    <div className='Main'>
        <Product data={productname1}></Product>   
        <Product data={productname4}></Product>
        <Product data={productname2}></Product>
        <Product data={productname3}></Product>

    </div>
    <br></br>

    </div>
  )
}

export default Middle