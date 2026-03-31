import React from "react";
import VectorPNG from "../../assets/vector.png";
import { toast } from "react-toastify";
import { Check } from "lucide-react";

const Product = ({ tool, cart, setCart }) => {
  // {
  //     "id": 4,
  //     "name": "Automation Toolkit",
  //     "description": "Automate repetitive tasks and streamline your workflow with powerful tools.",
  //     "price": 79,
  //     "period": "monthly",
  //     "tag": "Popular",
  //     "tagType": "popular",
  //     "features": [
  //         "50+ automations",
  //         "API access",
  //         "Custom workflows"
  //     ],
  //     "icon": "https://i.ibb.co.com/Hfq8D26b/operation.png"
  // }

  const isAdded = cart.some((item) => item.id === tool.id);

  const tagConfig = {
      new: {
        "name": "New",
        className: "font-semibold text-sm bg-[#DBFCE7] text-green-600 py-1.5 shadow-md px-3 rounded-full absolute right-4"
      },
      "best-seller": {
        name: "Best Seller",
        className: "font-semibold text-sm bg-[#fef3c6] text-[#BB4D00] py-1.5 shadow-md px-3 rounded-full absolute right-4"
      },
      "popular": {
        name: "Popular",
        className: "font-semibold text-sm bg-[#E1E7FF] text-[#9216fa] py-1.5 shadow-md px-3 rounded-full absolute right-4"
      }
  }
  const tagOBJ = tagConfig[tool.tagType];

  console.log(tagOBJ.className);
  const handleBuyNow = () => {
    console.log(isAdded);

    toast.success(`${tool.name} is added to the Cart`);

    setCart([...cart, tool]);
  };

  return (
    <div className="p-4 space-y-4 border border-gray-400 rounded-4xl h-full overflow-hidden shadow-lg transform duration-600 hover:scale-105 relative">
      <span className={tagOBJ.className}>{tagOBJ.name}</span>
      <div className="p-4 border border-gray-400 rounded-full inline-block">
        <img
          className="w-8 h-8 object-contain"
          src={tool.icon}
          alt=""
        />
      </div>
      <h1 className="text-2xl font-bold">{tool.name}</h1>
      <p className="text-[#627382]">{tool.description}</p>
      <h3 className="font-bold text-xl">
        ${tool.price}
        <span className="text-[#627382] font-normal text-sm">/Mo</span>
      </h3>
      <div>
        {tool.features.map((feature) => (
          <p className="flex gap-2 items-center justify-start text-[#627382] font-medium">
            <img className="w-4 h-3" src={VectorPNG} /> {feature}
          </p>
        ))}
      </div>
      <button
        onClick={handleBuyNow}
        className={`btn bg-primary w-full rounded-full text-white ${isAdded ? "bg-success text-white" : "bg-linear-to-r from-[#4F39F6] to-[#9514FA]"} disabled:bg-success disabled:cursor-pointer`}
        disabled={isAdded}
      >
        {isAdded ? (
          <>
          {<Check/>} Added To Cart
          </>
          ) : "Buy Now"}
      </button>
    </div>
  );
};

export default Product;
