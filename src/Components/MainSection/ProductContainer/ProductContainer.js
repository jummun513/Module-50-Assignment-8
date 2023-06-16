import React, { useEffect, useState } from 'react';
import Products from './Products/Products';
import './ProductContainer.css';
import Cart from './Cart/Cart';

const ProductContainer = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])



    const [choose, setChoose] = useState([]);
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        let newCart = [];
        const exists = choose.find(item => item.id === product.id);
        if (!exists) {
            product.amount = 1;
            newCart = [...choose, product];
        }
        else {
            const rest = choose.filter(item => item.id !== product.id);
            exists.amount = exists.amount + 1;
            newCart = [...rest, exists];
        }
        // if (Array.isArray(product) === true) {
        //     const value = Math.random();
        //     const result = Math.floor(value * cart.length);
        //     const output = cart[result];
        //     setChoose(output);
        //     setCart([]);
        // }
        // else {
        //     const newCart = [...cart, product];
        //     setCart(newCart);
        // }
        setChoose(newCart);
    }

    console.log(choose);

    // choose again 
    const clearAll = () => {
        setCart([]);
        setChoose([]);
    }

    return (
        <div className='product-container'>
            <Products products={products} handleAddToCart={handleAddToCart}></Products>
            <Cart choose={choose}></Cart>
        </div>
    );
};

export default ProductContainer;