import React from 'react';
import EmptyCart from './EmptyCart';
import CartCard from './CartCard';

const Cart = ({cart, setCart}) => {

    let total = 0;
    for (const item of cart) {
        total += Number(item.price);
    }

    const handlePay = () => {
        setCart([]);
    } 

    return (
        <div className='max-w-300 mx-auto border border-gray-300 shadow-lg rounded-2xl p-10 mt-10'>
            <h1 className={`font-bold text-[1.5rem] ${cart.length === 0 ? "hidden" : ""}`}>Your Cart</h1>
            {
                cart.length === 0 ? <EmptyCart /> : <CartCard cart = {cart} setCart = {setCart} />
            }
            <div className={`${cart.length === 0 ? "hidden" : ""} mt-15 flex justify-between items-center`}>
                <p className='text-[#627382]'>Total:</p>
                <p className='font-bold text-[1.5rem]'>${total}</p>
            </div>
            <button onClick={handlePay} className={`btn btn-primary w-full rounded-full mt-4 ${cart.length === 0 ? "hidden" : ""}`}>Proceed To Checkout</button>
        </div>
    );
};

export default Cart;