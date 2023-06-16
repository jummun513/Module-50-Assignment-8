import React from 'react';
import Products from './Products/Products';
import './ProductContainer.css';
import Cart from './Cart/Cart';

const ProductContainer = () => {
    return (
        <div className='product-container'>
            <Products></Products>
            <Cart></Cart>
        </div>
    );
};

export default ProductContainer;