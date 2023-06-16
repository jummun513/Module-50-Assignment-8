import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import './Products.css'

const Products = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div className='card-container'>
            {
                products.map((product, idx) => <Product key={idx} product={product} />)
            }
        </div>
    );
};

export default Products;