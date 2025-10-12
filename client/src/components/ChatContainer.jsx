import React from 'react'
import assets from "../assets/chat-app-assets/assets.js";


const ChatContainer = ({ selectedUser, setSelectedUser }) => {
  return selectedUser ? (
    <div className='h-full overflow-scroll relative backdrop-blur-lg'>
      {/* Chat Header */}
      <div className='flex items-center gap-3 py-3 mx-4 border-b border-stone-500'>
        <img
          src={assets.profile_martin}
          alt='Profile'
          className='w-8 rounded-full'
        />
        <p className='flex-1 text-lg text-white flex items-center gap-2'>
          Martin Johnson
          <span className='w-2 h-2 rounded-full bg-green-500'></span>
        </p>
        <img
          onClick={() => setSelectedUser(null)}
          src={assets.arrow_icon}
          alt='Back'
          className='md:hidden max-w-7 cursor-pointer'
        />
        <img
          src={assets.help_icon}
          alt='Help'
          className='max-md:hidden max-w-5'
        />
      </div>
      {/* Chat messages and input area */}
      <div></div>
    </div>
  ) : (
    <div className='flex flex-col items-center justify-center gap-2 text-gray-500 bg-white/10 max-md:hidden'>
      <img
        src={assets.logo_icon}
        alt='Logo'
        className='max-w-16 mb-4'
      />
      <p className='text-lg font-medium text-white'>
        Chat anytime, anywhere
      </p>
    </div>
  )
}

export default ChatContainer
