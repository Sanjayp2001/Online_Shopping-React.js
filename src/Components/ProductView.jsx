import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const ProductView = () => {
  const productData = JSON.parse(sessionStorage.getItem('productData'));

  return (
    <div>
    
      <table>
        <tbody>
          <tr>
            <td rowSpan={4}><img src={productData ? productData.img : ''} alt="" /></td>
          </tr>
          <tr>
            <td><p>{productData ? productData.title : ''}</p></td>
            <td><p>{productData ? productData.price : ''}</p></td>
            <td><p>{productData ? productData.ratings : ''}</p></td>
            <td><button>Buy Now</button></td>
          </tr>
        </tbody>
      </table>
      <Footer/>
    </div>
  )
}

export default ProductView;
