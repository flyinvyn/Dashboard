import React from 'react'
import avatar from '../img/avatar.png'
import { BsEmojiSmile } from "react-icons/bs";
import { GrAttachment } from "react-icons/gr";



const Chat = () => {
    return (
        <div>
            <div className="bg-white p-4 pt-3 rounded-sm flex-1 rounded-r-xl w-[410px] h-[300px]">
                <p className='text-base font-semibold'>Ester Howard</p>
                <div className='relative'>
                    <div className='flex items-center gap-2 mt-3 absolute right-0'>
                        <p className='bg-indigo-500 p-2 rounded-l-lg rounded-t-lg text-white font-medium'>Are you ready?</p>
                        <div className='w-10 h-10 rounded-full'>
                            <img className='rounded-full' src={avatar} alt="avatar" />
                        </div>
                    </div>
                    <div className='flex items-center gap-2 mt-3 absolute left-0 top-14'>
                        <div className='w-10 h-10 rounded-full'>
                            <img className='rounded-full' src={avatar} alt="avatar" />
                        </div>
                        <p className='bg-gray-100 p-2 rounded-r-lg rounded-t-lg text-black font-medium'>I have prepared everythink</p>
                    </div>
                    <div className='bg-gray-100 absolute top-36 w-full h-28 rounded-xl'>
                        <textarea className='p-3 bg-transparent focus:outline-none active:outline-none w-full' placeholder='Type your message' />
                        <div className='flex items-center justify-between px-2'>
                            <div className='flex items-center gap-3 text-xl'>
                                <button>
                                    <BsEmojiSmile />
                                </button>
                                <button>
                                    <GrAttachment />
                                </button>
                            </div>
                            <div className='bg-indigo-500 px-3 py-1 rounded-md'>
                                <button className='text-white w-full'>Send now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat