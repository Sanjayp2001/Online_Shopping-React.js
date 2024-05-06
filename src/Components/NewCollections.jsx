import React from 'react'
import './NewCollections.css'
import p1_img from "./Assets/product_13.png";
import p2_img from "./Assets/product_19.png";
import p3_img from "./Assets/product_14.png";
import p4_img from "./Assets/product_15.png";
import p5_img from "./Assets/product_16.png";
import p6_img from "./Assets/product_20.png";
import p7_img from "./Assets/product_21.png";
import p8_img from "./Assets/product_24.png";
import p9_img from "./Assets/product_17.png";
import p10_img from "./Assets/product_23.png";
import p11_img from "./Assets/product_18.png";
import p12_img from "./Assets/product_15.png";


const NewCollections = () => {
  return (
    <div className='new_collections' id="mens">
      <h1>Dress Up Dreams</h1>
      <div className='collections'>
        <div>
        <img src={p1_img} alt="" />
          <h4>Men Green Solid Zippered</h4>
          <p>50.00</p>
          <strike>80.50</strike>
          <p>5.0⭐⭐⭐⭐⭐</p>
    
          <button className='buy_now'>Buy Now</button>
        </div>

        <div> 
          <img src={p2_img} alt="" />
          <h4>Men Orange Solid Zippered</h4>
          <p>50.00</p>
          <strike>80.50</strike>
          <p>5.0⭐⭐⭐⭐⭐</p>
          <button className='buy_now'>Buy Now</button>
        </div>

        <div><img src={p3_img} alt="" />
          <h4>Men Red Solid Zippered</h4>
          <p>50.00</p>
          <strike>80.50</strike>
          <p>5.0⭐⭐⭐⭐⭐</p>
          <button className='buy_now'>Buy Now</button>
        </div>
        <div><img src={p4_img} alt="" />
          <h4>Men Black Solid Zippered</h4>
          <p>50.00</p>
          <strike>80.50</strike>
          <p>5.0⭐⭐⭐⭐⭐</p>
          <button className='buy_now'>Buy Now</button>
        </div>

        <div><img src={p5_img} alt="" />
          <h4>Men Grey Solid Zippered</h4>
          <p>50.00</p>
          <strike>80.50</strike>
          <p>4.8⭐⭐⭐⭐</p>
          <button className='buy_now'>Buy Now</button>
        </div>

        <div><img src={p6_img} alt="" />
          <h4>Men White Solid Zippered</h4>
          <p>50.00</p>
          <strike>80.50</strike>
          <p>4.8⭐⭐⭐⭐</p>
          <button className='buy_now'>Buy Now</button>
        </div>

        <div><img src={p7_img} alt="" />
          <h4>Men Blue Solid Zippered</h4>
          <p>50.00</p>
          <strike>80.50</strike>
          <p>4.8⭐⭐⭐⭐</p>
          <button className='buy_now'>Buy Now</button>
        </div>

        <div><img src={p8_img} alt="" />
          <h4>Men Yellow Solid Zippered</h4>
          <p>50.00</p>
          <strike>80.50</strike>
          <p>4.8⭐⭐⭐⭐</p>
          <button className='buy_now'>Buy Now</button>
        </div>

        <div><img src={p9_img} alt="" />
          <h4>Men Brown Solid Zippered</h4>
          <p>50.00</p>
          <strike>80.50</strike>
          <p>4.8⭐⭐⭐⭐</p>
          <button className='buy_now'>Buy Now</button>
        </div>

        <div><img src={p10_img} alt="" />
          <h4>Men Pink Solid Zippered</h4>
          <p>50.00</p>
          <strike>80.50</strike>
          <p>4.8⭐⭐⭐⭐</p>
          <button className='buy_now'>Buy Now</button>
        </div>

        <div><img src={p11_img} alt="" />
          <h4>Men white Solid Zippered</h4>
          <p>50.00</p>
          <strike>80.50</strike>
          <p>4.8⭐⭐⭐⭐</p>
          <button className='buy_now'>Buy Now</button>
        </div>

        <div><img src={p12_img} alt="" />
          <h4>Men Black Solid Zippered</h4>
          <p>50.00</p>
          <strike>80.50</strike>
          <p>4.8⭐⭐⭐⭐</p>
          <button className='buy_now'>Buy Now</button>
        </div>
      </div>
    </div>
  )
}

export default NewCollections
