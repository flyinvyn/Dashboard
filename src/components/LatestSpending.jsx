import React from 'react'
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const LatestSpending = () => {
    return (
        <div className='border border-gray-300 rounded-xl p-3 mt-5'>
            <div className='flex justify-between items-center'>
                <p className='font-semibold'>Latest Spending</p>
                <button className='hover:bg-gray-400 transition-all rounded-full w-8 h-8'>
                    <HiOutlineDotsVertical className='text-xl mx-auto' />
                </button>
            </div>
            <div className='flex item-center mt-3 border-b-2 pb-5'>
                <div className='w-14 h-14 rounded-full' style={{ backgroundImage: 'url("http://i988.photobucket.com/albums/af1/pagadesign/lightbox075.jpg")', backgroundSize: 'cover' }}></div>
                <div className='mx-auto mt-1'>
                    <p className='font-semibold text-base'>Online Store</p>
                    <p className='font-medium text-xs text-gray-300'>May 30,2023 at 08:00 pm</p>
                </div>
            </div>
            <div className='flex item-center mt-3 border-b-2 pb-5'>
                <div className='w-14 h-14 rounded-full' style={{ backgroundImage: 'url("https://tse2.mm.bing.net/th?id=OIP.GpSKcS1KUONwHOOmZWXxPwHaHa&pid=Api&P=0&h=220")', backgroundSize: 'cover' }}></div>
                <div className='mx-auto mt-1'>
                    <p className='font-semibold text-base'>Pay the hospital</p>
                    <p className='font-medium text-xs text-gray-300'>May 28,2023 at 10:00 pm</p>
                </div>
            </div>
            <div className='flex item-center mt-3 pb-5'>
                <div className='w-14 h-14 rounded-full' style={{ backgroundImage: 'url("https://static.vecteezy.com/system/resources/previews/013/079/360/non_2x/movie-ticket-3d-icon-free-png.png")', backgroundSize: 'cover' }}></div>
                <div className='mx-auto mt-1'>
                    <p className='font-semibold text-base'>Tickets</p>
                    <p className='font-medium text-xs text-gray-300'>May 10,2023 at 12:00 pm</p>
                </div>
            </div>
            <div className='flex items-center justify-center gap-2'>
                <div><Link className='hover:no-underline'>View all</Link></div>
                <div><FaArrowRight className='text-blue-400 cursor-pointer' /></div>
            </div>
        </div>
    )
}

export default LatestSpending