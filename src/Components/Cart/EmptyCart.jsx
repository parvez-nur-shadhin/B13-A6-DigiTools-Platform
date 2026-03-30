import React from 'react';
import ShoppingCartIMG from "../../assets/cartIMG.png"

const EmptyCart = () => {
    return (
        <div className='py-15'>
            <img className='max-w-60 mx-auto opacity-50' src={ShoppingCartIMG} alt="" />
            <h1 className='text-center text-4xl font-bold text-gray-500'>Your Cart Is Empty</h1>
        </div>
    );
};

export default EmptyCart;