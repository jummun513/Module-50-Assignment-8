import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import './Products.css'

const Products = ({ products, handleAddToCart }) => {

    return (
        <div className='card-container'>
            {
                products.map((product, idx) => <Product key={idx} product={product} handleAddToCart={handleAddToCart} />)
            }
        </div>
    );
};

export default Products;