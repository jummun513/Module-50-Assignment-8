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



    const [cart, setCart] = useState([]);
    const [choose, setChoose] = useState([]);


    const chooseRandomly = () => {
        if (cart.length !== 0) {
            const value = Math.random();
            const result = Math.floor(value * (cart.length));
            const output = cart[result];
            setCart([]);
            setChoose([output]);
        }

    }

    const handleAddToCart = (product) => {
        let newCart = [];
        const exists = cart.find(item => item.id === product.id);
        if (!exists) {
            product.amount = 1;
            newCart = [...cart, product];
        }
        else {
            const rest = cart.filter(item => item.id !== product.id);
            exists.amount = exists.amount + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
    }


    // choose again 
    const chooseAgain = () => {
        setCart([]);
        setChoose([]);
    }

    return (
        <div className='product-container'>
            <Products products={products} handleAddToCart={handleAddToCart}></Products>
            <Cart choose={cart.length === 0 ? choose : cart} chooseRandomly={chooseRandomly} chooseAgain={chooseAgain}></Cart>
        </div>
    );
};

export default ProductContainer;