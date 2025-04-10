import React from 'react'



const DjIntroCard = (cardInfo: InfoCard) => {
    return (
        <div className='w-1/3 h-96 p-6'>
            <a href={cardInfo.link} target="_blank" rel="noopener noreferrer">
                <img src={cardInfo.imageUrl} alt={cardInfo.title}
                    width={300} height={300} />
                <div >{cardInfo.title}</div>
                <div >{cardInfo.description}</div>
            </a>
        </div>
    )
}

export default DjIntroCard

export interface InfoCard {
    title?: string;
    description?: string;
    imageUrl?: string;
    link?: string;
}