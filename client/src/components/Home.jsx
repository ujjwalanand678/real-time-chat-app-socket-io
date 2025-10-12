import React, { useState } from "react";
import ChatContainer from "./ChatContainer";
import FriendList from "./FriendList";
import UserProfile from "./UserProfileSideBar";

const Home = () => {
    const [selectedUser , setSelectedUser] = useState(false)
  return (
    <div className="border w-full h-screen px-20 py-10">
      <div className={`backdrop-blur-xl border-2 border-gray-600 rounded-2xl overflow-hidden h-[100%] grid grid-cols-1 relative ${selectedUser ? 'md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]' : 'md:grid-cols-2'}`}>
        <FriendList selectedUser={selectedUser}  setSelectedUser={setSelectedUser}/>
        <ChatContainer selectedUser={selectedUser}  setSelectedUser={setSelectedUser}/>
        <UserProfile selectedUser={selectedUser}  setSelectedUser={setSelectedUser}/>
      </div>
    </div>
  );
};

export default Home;
