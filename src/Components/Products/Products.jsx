import React, { use } from 'react';
import Product from '../Product/Product';

const Products = ({toolsData}) => {

    const tools = use(toolsData);

    return (
        <div className='max-w-300 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10 p-4 h-full'>
            {
                tools.map(tool => <Product key = {tool.id} tool = {tool} />)
            }
        </div>
    );
};

export default Products;