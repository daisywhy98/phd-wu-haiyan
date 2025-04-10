import React from 'react'



const DjHeader = () => {
    return (      
        <div className='w-full h-48 p-6' style={{ backgroundImage: "url('/images/header-background.gif')", backgroundSize: "100% auto", 
            backgroundPosition: "center", 
            backgroundRepeat: "no-repeat"  }}>
            <div className="text-3xl font-bold text-green-200">Welcome to our&apos;s website</div>
        </div>
    )
}

export default DjHeader