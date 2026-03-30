import React from 'react';
import UserIMG from "../../assets/user.png"
import PackageIMG from "../../assets/package.png"
import RocketIMG from "../../assets/rocket.png"

const GetStarted = () => {
    return (
        <div className='bg-[#F9FAFC] max-w-400 mx-auto py-30 mt-30'>
            <h1 className='text-center font-extrabold text-[3rem]'>Get Started in 3 Steps</h1>
            <p className='text-[#627382] text-center'>Start using premium digital tools in minutes, not hours.</p>
            <div className='max-w-300 mx-auto grid gap-5 grid-cols-3 mt-10'>

            <div className='relative'>
                <div className='bg-white p-6 border border-gray-200 rounded-lg shadow-lg'>
                    <h1 className='bg-[#8a20f9] text-white text-sm font-semibold p-2 px-3 rounded-full inline absolute right-4'>01</h1>
                    <img className='mx-auto p-6 rounded-full bg-[#8a20f920]' src={UserIMG} alt="" />
                    <h1 className='font-bold text-[1.5rem] text-center'>Create Account</h1>
                    <p className='text-[#627382] text-center'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>
            </div>
            <div className='relative'>
                <div className='bg-white p-6 border border-gray-200 rounded-lg shadow-lg'>
                    <h1 className='bg-[#8a20f9] text-white text-sm font-semibold p-2 px-3 rounded-full inline absolute right-4'>02</h1>
                    <img className='mx-auto p-6 rounded-full bg-[#8a20f920]' src={PackageIMG} alt="" />
                    <h1 className='font-bold text-[1.5rem] text-center'>Choose Products</h1>
                    <p className='text-[#627382] text-center'>Browse our catalog and select the tools that fit your needs.</p>
                </div>
            </div>
            <div className='relative'>
                <div className='bg-white p-6 border border-gray-200 rounded-lg shadow-lg'>
                    <h1 className='bg-[#8a20f9] text-white text-sm font-semibold p-2 px-3 rounded-full inline absolute right-4'>03</h1>
                    <img className='mx-auto p-6 rounded-full bg-[#8a20f920]' src={RocketIMG} alt="" />
                    <h1 className='font-bold text-[1.5rem] text-center'>Start Creating</h1>
                    <p className='text-[#627382] text-center'>Download and start using your premium  tools immediately.</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default GetStarted;