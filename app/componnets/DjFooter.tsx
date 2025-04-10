import React from 'react'
import SendEmail from './SendEmail'
import SocialConnet from './SocialConnet'




const DjHeader = () => {
    return (
        <div className='w-full h-36 p-6 bg-linear-to-r from-green-300 to-green-100' >
            <div className="text-green-800 font-bold">Stay informed, inspired, and empowered. Sign up to receive 📧 emails from our team.</div>
            <div className='flex flex-row items-center justify-between mt-2'>

                <SendEmail></SendEmail>
                <SocialConnet></SocialConnet>

            </div>


        </div>
    )
}

export default DjHeader