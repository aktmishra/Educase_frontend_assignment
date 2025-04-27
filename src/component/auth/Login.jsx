import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    if ( !email || !password ) {
      alert("Please fill all required fields.");
      return;
    }
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    localStorage.setItem("userData", JSON.stringify(userData));

    setTimeout(() => {
      navigate("/profile");
    }, 400);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center max-h-fit">
      <div className="flex flex-col items-start justify-end   gap-y-5 border-[1px] p-5 sm:p-10 text-wrap w-fit h-screen bg-gray-50">
        <h1 className="text-3xl text-left font-medium text-gray-900 ">
          Signin to your PopX account
        </h1>
        <p className="text-gray-500 font-medium text-left">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <form
          onSubmit={handleLogin}
          className="mt-[31px] flex flex-col gap-7 flex-grow w-full items-start"
        >
          {/* Email */}
          <div className="flex flex-col gap-1 relative w-full">
            <label
              className="text-[#6C25FF] absolute -top-2 left-3 pl-1 bg-[#F7F8F9] w-[101px] text-[13px]"
              htmlFor="email"
            >
              Email address<span className="text-red-500">*</span>
            </label>
            <div className="flex items-center border border-[#CBCBCB] rounded-md h-[40px] overflow-hidden">
              <input
                type="email"
                id="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 text-black h-[40px] text-[12.46px] bg-transparent focus:outline-none focus:ring-0"
              />
            </div>
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1 relative w-full">
            <label
              className="text-[#6C25FF] absolute -top-2 left-3 pl-1 bg-[#F7F8F9] w-[101px] text-[13px]"
              htmlFor="pass"
            >
              Password <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center border border-[#CBCBCB] rounded-md h-[40px] overflow-hidden">
              <input
                type="password"
                id="pass"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-2 text-black h-[40px] text-[12.46px] bg-transparent focus:outline-none focus:ring-0"
              />
            </div>
          </div>

          <div className="mt-16 w-full">
            <button
              onClick={handleLogin}
              className="bg-gray-300 text-lg cursor-pointer w-full text-white py-3 rounded-md transition-opacity duration-300 ease-out font-medium"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
