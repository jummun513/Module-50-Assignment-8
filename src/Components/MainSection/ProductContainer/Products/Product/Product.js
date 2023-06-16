import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {

    const { name, picture, price } = props.product; //destructuring

    return (
        <div>
            <div className='card'>
                <img src={picture} alt="" />
                <h4>{name.length < 20 ? name : name.slice(0, 20)}</h4>
                <p>Price : ${price}</p>
                <button>
                    Add To Cart &nbsp;
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default Product;