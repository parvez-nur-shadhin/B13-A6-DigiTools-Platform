import { Suspense, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ActiveUsersInfo from "./Components/ActiveUsersInfo/ActiveUsersInfo";
import Banner from "./Components/Banner/Banner";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";
import GetStarted from "./Components/GetStarted/GetStarted";
import TransparentPricing from "./Components/TransparentPricing/TransparentPricing";

const fetchTools = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const [cart, setCart] = useState([]);
  const [isProduct, setIsProduct] = useState(true);
  const [isCart, setIsCart] = useState(false);

  const toolsData = fetchTools();

  const handleProduct = () => {
    setIsProduct(true);
    setIsCart(false);
  };

  const handleCart = () => {
    setIsCart(true);
    setIsProduct(false);
  };

  return (
    <>
      <Navbar cart={cart} />
      <Banner />
      <ActiveUsersInfo />

      {/* Toggling Section */}
      <div className="max-w-300 mx-auto text-center space-y-4 mt-15 md:mt-30">
        <h1 className="text-5xl font-bold text-[#101727]">
          Premium Digital Tools
        </h1>
        <p className="text-[#627382]">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
        <div className="p-1 px-7 rounded-full shadow-lg inline-flex flex-1 gap-2 items-center justify-center border border-gray-300">
          <button
            onClick={handleProduct}
            className={`${isProduct ? "btn btn-primary bg-primary rounded-full" : ""} cursor-pointer`}
          >
            Products
          </button>
          <button
            onClick={handleCart}
            className={`${isCart ? "btn btn-primary bg-primary rounded-full" : ""} cursor-pointer`}
          >
            Cart({cart.length})
          </button>
        </div>
      </div>

      {isProduct === true ? (
        <Suspense
          fallback={
            <div className="flex justify-center items-center">
              <span className="loading loading-bars loading-xl"></span>
            </div>
          }
        >
          <Products toolsData={toolsData} cart = {cart} setCart = {setCart} />
        </Suspense>
      ) : (
        <Cart cart={cart} setCart={setCart} />
      )}

      <GetStarted />
      <TransparentPricing/>
    </>
  );
}

export default App;
