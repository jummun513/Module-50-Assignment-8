import React from 'react';
import './Cart.css'

const Cart = ({ choose }) => {
    return (
        <div className='choose-container'>
            <h3>Your selected Items</h3>
            {
                choose.map((each, idx) => <Item key={idx} each={each}></Item>)
            }
            <button className='choose'>Choose One</button>
            <button className='clear'>Choose again</button>
        </div>
    );
};

const Item = (props) => {
    const { picture, name, amount, price } = props.each;
    return (
        <>
            <div className="small-card">
                <div className="img">
                    <img src={picture} alt="" />
                    <p style={{ marginLeft: '8px', fontWeight: '600' }}>{name.slice(7, 16)}</p>
                </div>
                <div className="text" style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ margin: '0 30px' }}>
                        <p style={{ marginBottom: '5px' }}>Quantity</p>
                        <p style={{ fontWeight: '600', textAlign: 'center' }}>{amount}</p>
                    </div>
                    <div style={{ margin: '0 30px' }}>
                        <p style={{ marginBottom: '5px' }}>Price</p>
                        <p style={{ fontWeight: '600' }}>TK. {price * amount}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart;