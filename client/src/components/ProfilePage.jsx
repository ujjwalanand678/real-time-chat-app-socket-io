import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import assets from "../assets/chat-app-assets/assets";

const ProfilePage = () => {
  const [selectedImg , setSelectedImg] = useState(null);
  const navigate = useNavigate();
  const [name , setName] = useState("Rohit Kumar");
  const [bio , setBio] = useState("Hi , I am using ChatApp");
  const handleSubmit = async (e)=>{
    e.preventDefault();
    navigate("/");
  }
  return( 
  <div className="min-h-screen bg-cover bg-no-repeat flex items-center justify-center">
    <div className="w-5/6 max-w-2xl backdrop-blur-2xl text-gray-300 border-2 border-gray-600 flex items-center justify-between max-sm:flex-col-reverse rounded-lg">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-10 flex-1" >
        <h3 className="text-lg">Profile detail</h3>
        <label htmlFor="avatar" className="flex items-center gap-3 cursor-pointer">
          <input onChange={(e)=>setSelectedImg(e.target.files[0])} type="file" id="avatar" accept=".png , .jpg , .jpeg" hidden/>
          <img src={selectedImg ? URL.createObjectURL(selectedImg) : assets.avatar_icon} alt="" className={`w-12 h-12 ${selectedImg && "rounded-full"}`}/>
          Upload Profile Image
        </label>
        <input onChange={(e)=>setName(e.target.value)} value={name} type="text"  required placeholder="Your Name" className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"/>
        <textarea onChange={(e)=>setBio(e.target.value)} value={bio} placeholder="Write Your Profile Bio" required className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500" row={4}></textarea>
        <button type="submit" className="py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-md font-medium hover:scale-105 duration-300 cursor-pointer">Save</button>
      </form>
      <img src={assets.logo_icon} alt="" className="max-w-44 aspect-square rounded-full mx-10 max-sm:mt-10"/>
    </div>
  </div>);
};

export default ProfilePage;
