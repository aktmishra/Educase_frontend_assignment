import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [isAgency, setIsAgency] = useState("");

  const navigate = useNavigate();

  const handleCreateAccount = (e) => {
    e.preventDefault();
    if (!fullName || !phoneNumber || !email || !password || !isAgency) {
      alert("Please fill all required fields.");
      return;
    }
    const userData = {
      fullName,
      phoneNumber,
      email,
      password,
      companyName,
      isAgency,
    };
    localStorage.setItem("userData", JSON.stringify(userData));
    setTimeout(() => {
      navigate("/profile");
    }, 400);
  };
  return (
    <div className="w-full flex flex-col justify-center items-center max-h-fit">
      <div className="flex flex-col items-start justify-end   gap-y-5 border-[1px] p-5 sm:p-10 text-wrap w-fit h-screen bg-gray-50">
      <h1 className="text-3xl text-left font-medium text-gray-900 ">Create your PopX account</h1>

      <form
        onSubmit={handleCreateAccount}
        className="mt-[31px] flex flex-col gap-7 flex-grow w-full items-start"
      >
        {/* All your inputs here */}
        <div className="flex flex-col gap-1 relative w-full">
          {/* Full Name */}
          <label
            className="text-[#6C25FF] absolute -top-2 left-4  bg-[#F7F8F9] w-[101px] text-[13px]"
            htmlFor="fullname"
          >
            Full Name<span className="text-red-500">*</span>
          </label>
          <div className="flex items-center border border-[#CBCBCB] rounded-md h-[40px] overflow-hidden">
            <input
              type="text"
              id="fullname"
              placeholder="Ankit Mishra"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="w-full px-3 py-2 text-black h-[40px] text-[12.46px] bg-transparent focus:outline-none focus:ring-0"
            />
          </div>
        </div>

        {/* Phone Number */}
        <div className="flex flex-col gap-1 relative w-full">
          <label
            className="text-[#6C25FF] absolute -top-2 left-3 pl-1 bg-[#F7F8F9] w-[101px] text-[13px]"
            htmlFor="phonenumber"
          >
            Phone Number<span className="text-red-500">*</span>
          </label>
          <div className="flex items-center border border-[#CBCBCB] rounded-md h-[40px] overflow-hidden">
            <input
              type="text"
              id="phonenumber"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              className="w-full px-3 py-2 text-black h-[40px] text-[12.46px] bg-transparent focus:outline-none focus:ring-0"
            />
          </div>
        </div>

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

        {/* Company Name */}
        <div className="flex flex-col gap-1 relative w-full">
          <label
            className="text-[#6C25FF] absolute -top-2 left-3 pl-1 bg-[#F7F8F9] w-[101px] text-[13px]"
            htmlFor="companyname"
          >
            Company name
          </label>
          <div className="flex items-center border border-[#CBCBCB] rounded-md h-[40px] overflow-hidden">
            <input
              type="text"
              id="companyname"
              placeholder="Company Name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="w-full px-3 py-2 text-black h-[40px] text-[12.46px] bg-transparent focus:outline-none focus:ring-0"
            />
          </div>
        </div>

        {/* Agency */}
        <div className="flex flex-col gap-1 ml-1">
          <label className="text-[13px]" htmlFor="agency">
            Are you an Agency?<span className="text-red-500">*</span>
          </label>
          <div className="flex gap-5 mt-2">
            <label className="flex items-center gap-1 text-sm">
              <input
                type="radio"
                name="agency"
                value="Yes"
                checked={isAgency === "Yes"}
                onChange={(e) => setIsAgency(e.target.value)}
                className="accent-[#6C25FF]"
              />
              Yes
            </label>
            <label className="flex items-center gap-1 text-sm">
              <input
                type="radio"
                name="agency"
                value="No"
                checked={isAgency === "No"}
                onChange={(e) => setIsAgency(e.target.value)}
                className="accent-[#6C25FF]"
              />
              No
            </label>
          </div>
        </div>
        <div className="mt-16 w-full">
        <button
          onClick={handleCreateAccount}
          className="bg-[#6C25FF] w-full text-white py-3 rounded-md transition-opacity duration-300 ease-out font-medium"
        >
          Create Account
        </button>
      </div>
      </form>
       
       
      </div>
      
    </div>
  );
};

export default Register;
