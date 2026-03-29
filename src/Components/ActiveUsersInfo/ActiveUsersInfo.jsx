import React from 'react';

const ActiveUsersInfo = () => {
    return (
        <div className='max-w-400 mx-auto bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex flex-1 md:flex-row items-center justify-center py-15 mb-4 mt-12'>
            <div className='space-y-2 px-6 md:px-20 border-r-2 border-gray-400/70'>
                <h1 className='text-white font-extrabold text-xl md:text-5xl text-center'>50K+</h1>
                <h3 className='font-medium text-white text-sm md:text-xl text-center'>Active Users</h3>
            </div>
            <div className='space-y-2 px-6 md:px-20 border-r-2 border-gray-400/70'>
                <h1 className='text-white font-extrabold text-xl md:text-5xl text-center'>200+</h1>
                <h3 className='font-medium text-white text-sm md:text-xl text-center'>Active Tools</h3>
            </div>
            <div className='space-y-2 px-6 md:px-20'>
                <h1 className='text-white font-extrabold text-xl md:text-5xl text-center'>4.9</h1>
                <h3 className='font-medium text-white text-sm md:text-xl text-center'>Rating</h3>
            </div>
        </div>
    );
};

export default ActiveUsersInfo;