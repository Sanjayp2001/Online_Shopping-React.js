import React from 'react';
import './SearchProduct.css'

const SearchProduct = ({ searchResults }) => {
  return (
    <div>
      <table cellspacing={5} style={{borderCollapse:'collapse', padding:'10px'}}>
        <thead>
          <tr >
            <th>Image</th>
            <th>Title</th>
            <th>Category</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map(product => (
            <tr key={product.id}>
              <td><img src={product.image} alt={product.dish} style={{ width: '50px', height: '50px', borderRadius:'50%' }} /></td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.new_price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchProduct;