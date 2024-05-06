import React from 'react';
import './Popular.css';
import pr1 from './Assets/product_1.png';
import pr2 from './Assets/product_8.png';
import pr3 from './Assets/product_9.png';
import pr4 from './Assets/product_10.png';

const womens = [
  {
    id: 1,
    img: pr1,
    title: "Striped Flutter Sleeve Black",
    price: "50.00",
    ratings: "4.2 ⭐⭐⭐⭐"
  },
  {
    id: 2,
    img: pr2,
    title: "Striped Flutter Sleeve Flower ",
    price: "50.00",
    ratings: "4.2 ⭐⭐⭐⭐"
  },
  {
    id: 3,
    img: pr3,
    title: "Striped Flutter Sleeve Pink",
    price: "50.00",
    ratings: "4.2 ⭐⭐⭐⭐"
  },
  {
    id: 4,
    img: pr4,
    title: "Striped Flutter Sleeve Plain",
    price: "50.00",
    ratings: "4.2 ⭐⭐⭐⭐"
  }
];

function viewProduct(id) {
  const product = womens.find(item => item.id === id);
  if (product) {
    sessionStorage.setItem('productData', JSON.stringify(product));
    window.location.href = "./productview";
  }
}

const Popular = () => {
  return (
    <div className='popular' id="womens">
      <h1>Tiny Trends</h1>
    
      <div className="popular-item">
        {womens.map(product => (
          <div key={product.id} onClick={() => viewProduct(product.id)}>   
            <img src={product.img} alt="" />
            <h4>{product.title}</h4>
            <p>{product.price}</p>
            <p>{product.ratings}</p>
            
          
            <button className='buy_now'>Buy Now</button>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Popular;
