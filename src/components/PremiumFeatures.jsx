import React from 'react'

const PremiumFeatures = () => {
    return (
        <div className='border border-gray-300 rounded-xl p-3 mt-5'>
            <p className='flex justify-center text-base font-medium'>Go to premium</p>
            <div className='w-20 h-20 mt-3' style={{ backgroundImage: 'url("https://lh6.googleusercontent.com/proxy/Szcc4DLJ3DdtQeNljVdeGb1ESnC047A_Ul0XPeVst88SLiVxLyOAF6ov6S60Xk7f2ZgYxBR-kECGlysugyGFr2gtSeEd=w1200-h630-p-k-no-nu")', backgroundSize: 'cover' }}></div>
            <div className='mt-2'>
                <strong className='text-base'>Need more features?</strong>
                <p className='text-sm text-gray-300'>Update your account to premium to get more features.</p>
            </div>
                <button className='bg-indigo-500 rounded-lg mx-auto p-3 w-full text-white text-sm mt-3'>Get now</button>
        </div>
    )
}

export default PremiumFeatures