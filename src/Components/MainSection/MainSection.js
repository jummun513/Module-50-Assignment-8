import React from 'react';
import ProductContainer from './ProductContainer/ProductContainer';

const style = {
    fontSize: '25px',
    fontWeight: '500',
    backgroundColor: 'purple',
    color: '#fff',
    padding: '2px 0',
    marginBottom: '0',
    position: 'sticky',
    top: '0'
}

const MainSection = () => {
    return (
        <div className='container'>
            <h3 style={style}>Choose Any Five Items</h3>
            <ProductContainer></ProductContainer>
        </div>
    );
};

export default MainSection;