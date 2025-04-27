import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className=" w-full flex justify-center items-end max-h-fit">
      <div className="flex flex-col items-start justify-end   gap-y-5 border-2 p-5 sm:p-10 text-wrap w-fit h-screen bg-gray-100">
        <h1 className="text-2xl font-bold text-nowrap text-gray-900">Welcome to PopX</h1>
        <p className="text-wrap text-gray-400 font-medium text-left">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
       <div className="flex flex-col gap-y-2 w-full">
       <Link to="/register" className="bg-[#6C25FF] text-white py-2 px-6 w-full font-medium rounded-lg">
         Create Account
        </Link>
        <Link to="/login" className="bg-[#CEBAFB] text-gray-900 text-nowrap py-2 px-6 w-full font-bold rounded-lg">
         Already Registerd? Login  
        </Link>
       </div>
      </div>
    </div>
  );
};

export default Welcome;
