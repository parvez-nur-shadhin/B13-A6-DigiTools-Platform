import React from "react";
import { toast } from "react-toastify";

const CartCard = ({ cart, setCart }) => {
  return (
    <div className="">
      {cart.map((item) => {
        const handleRemove = () => {
            toast.info(`${item.name} is removed from the cart`)

          const newCart = cart.filter((CartItem) => CartItem.name !== item.name);
          setCart(newCart)
        };

        return (
          <div className="flex justify-between items-center bg-[#F9FAFC] p-5 rounded-lg mt-5">
            <div className="flex gap-3 items-center justify-center">
              <img className="w-8 h-8" src={item.icon} alt="" />
              <div>
                <h1 className="font-semibold text-[1.25rem] text-[#101727]">
                  {item.name}
                </h1>
                <p className="font-medium text-[#627382]">${item.price}</p>
              </div>
            </div>
            <div>
              <h1
                onClick={handleRemove}
                className="text-[#FF3980] font-bold cursor-pointer"
              >
                Remove
              </h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartCard;
