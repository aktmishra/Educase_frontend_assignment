import React, { useEffect, useState } from "react";

const Profile = () => {
  const [name, setName] = useState("Ankit Mishra");
  const [email, setEmail] = useState("aktmishra72@gmail.com");
  useEffect(() => {
    const userData = localStorage.getItem("userData");

    if (userData) {
      const parsedUser = JSON.parse(userData);
      setEmail(parsedUser.email || "aktmishra72@gmail.com");
      setName(parsedUser.fullName || "Ankit Mishra");
    } else {
      setEmail("aktmishra72@gmail.com");
      setName("Ankit Mishra");
    }
  }, []);
  return (
    <div className="bg-[#F7F8F9] flex flex-col min-h-screen gap-5 w-96 mx-auto border-[1px]">
      {" "}
      <div className="flex items-center text-[18px] h-[68px] pl-4 bg-white text-gray-700 font-bold">
        Account Settings
      </div>
      <div className="pl-5 flex gap-5">
        <div className="relative">
          <img
            src="/download.jpg"
            className="h-[76px] w-[76px] rounded-full"
            alt="Profile IMG"
          />
          <img
            src="/camera.jpg"
            className="absolute h-6 w-6 rounded-full right-0 bottom-0"
            alt=""
          />
        </div>
        <div className="flex flex-col text-left">
          <h3 className="text-xl font-medium text-gray-800">{name}</h3>
          <h3 className="text-sm text-gray-500 font-medium">{email}</h3>
        </div>
      </div>
      <div className="px-5 text-sm font-medium text-gray-600 text-left border-dashed border-gray-300 border-b pb-7">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </div>
    </div>
  );
};

export default Profile;
