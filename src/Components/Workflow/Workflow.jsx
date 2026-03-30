import React from "react";

const Workflow = () => {
  return (
    <div className="max-w-400 mx-auto bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-30">
      <h1 className="font-extrabold text-center text-4xl text-white">Ready to Transform Your Workflow?</h1>
      <p className="text-white text-center py-4">
        Join thousands of professionals who are already using Digitools to work
        smarter. <br /> Start your free trial today.
      </p>
      <div className="flex gap-5 items-center justify-center">
        <button class="btn btn-outline text-white border-white rounded-full hover:bg-black">Explore Products</button>
        <button class="btn btn-outline text-white border-white rounded-full hover:bg-black">View Pricing</button>
      </div>
    </div>
  );
};

export default Workflow;
