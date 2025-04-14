import React from 'react'



const DjIntroCard = (cardInfo: InfoCard) => {
    return (
        <div className='h-96 p-6 border rounded-2xl'>
            <a href={cardInfo.link} target="_blank" rel="noopener noreferrer" className=' flex flex-col gap-2'>
                <img src={cardInfo.imageUrl} alt={cardInfo.title}
                    width={300} height={300} />
                <div className='text-2xl font-bold'>{cardInfo.title}</div>
                <div className='text-l'>{cardInfo.description}</div>
            </a>
        </div>
    )
}

export default DjIntroCard

export interface InfoCard {
    id:number;
    title?: string;
    description?: string;
    imageUrl?: string;
    link?: string;
}