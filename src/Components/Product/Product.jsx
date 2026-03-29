import React from 'react';
import VectorPNG from "../../assets/vector.png"

const Product = ({tool}) => {
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
    return (
        <div className='p-4 space-y-4 border border-gray-400 rounded-4xl h-full overflow-hidden shadow-lg transform duration-600 hover:scale-105'>
            <div>
                <img className='p-4 rounded-full border border-gray-400' src={tool.icon} alt="" />
            </div>
            <h1 className='text-3xl font-bold'>{tool.name}</h1>
            <p className='text-[#627382]'>{tool.description}</p>
            <h3 className='font-bold text-2xl'>${tool.price}<span className='text-[#627382] font-normal text-sm'>/Mo</span></h3>
            <div>
                {
                    tool.features.map(feature => <p className='flex gap-2 items-center justify-start text-[#627382] font-medium'><img className='w-4 h-3' src={VectorPNG}/> {feature}</p>)
                }
            </div>
            <button className='btn bg-primary w-full rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>Buy Now</button>
        </div>
    );
};

export default Product;