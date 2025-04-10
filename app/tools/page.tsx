import React from 'react'
import DjIntroCard from '../componnets/DjIntroCard'

const page = () => {
    const cardData = [{
        title: 'Graph Calculator',
        description: 'This is a description for the card1.',
        imageUrl: '/images/graphing.png', 
        link:'https://www.symbolab.com/graphing-calculator'
    },
    {
        title: 'Calculus Calculator',
        description: 'This is a description for the card2.',
        imageUrl: '/images/calculus.png', 
        link:'https://www.symbolab.com/solver/calculus-calculator'
    },
    {
        title: 'Wave interference simulation',
        description: 'This is a description for the card2.',
        imageUrl: '/images/wave.jpg',
        link:'https://phet.colorado.edu/sims/html/wave-interference/latest/wave-interference_all.html'
    }];
    return (
        <div>
            {cardData.map((card,index) => (
                <DjIntroCard key={index} {...card} />
            ))}


        </div>
    )
}

export default page