import React from 'react';
import { useParams } from 'react-router-dom';
import Allproduct from './Assets/all_product'

const ViewProduct = () => {
    const { id } = useParams();
    const selectedItem = Allproduct.find(item => item.id === id);

    if (!selectedItem) {
        return <div>Item not found</div>;
    }

    const { image, name, description, price } = selectedItem;

    return (
        <div style={{ display: 'flex' }}>
            <div>
                <img src={image} alt="" width={300} />
            </div>
            <div style={{ marginLeft: '20px', marginTop: '50px' }}>
                <p>{name}</p> <br />
                <p>{description}</p> <br />
                <p>${price}</p>
            </div>
        </div>
    );
}

export default ViewProduct;