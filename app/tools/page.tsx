import React from 'react'
import DjIntroCard from '../componnets/DjIntroCard'

const page = () => {
    const pageData = [{
        section: 'Math', cardData: [
            {   id:101,
                title: 'Graph Calculator',
                description: 'This is a description for the card1.',
                imageUrl: '/images/graphing.png',
                link: 'https://www.symbolab.com/graphing-calculator'
            }, {
                id:102,
                title: 'Calculus Calculator',
                description: 'This is a description for the card2.',
                imageUrl: '/images/calculus.png',
                link: 'https://www.symbolab.com/solver/calculus-calculator'
            }]
    }, {
        section: 'Physics', cardData: [
            {   
                id:201,
                title: 'Forde simulation',
                description: 'This is a description for the card2.',
                imageUrl: '/images/force.jpg',
                link: 'https://phet.colorado.edu/sims/html/forces-and-motion-basics/latest/forces-and-motion-basics_all.html'
            }, {
                id:202,
                title: 'Wave interference simulation',
                description: 'This is a description for the card2.',
                imageUrl: '/images/wave.jpg',
                link: 'https://phet.colorado.edu/sims/html/wave-interference/latest/wave-interference_all.html'
            }, {
                id:203,
                title: 'Circuit simulation',
                description: 'This is a description for the card2.',
                imageUrl: '/images/circuit.jpg',
                link: 'https://phet.colorado.edu/sims/html/circuit-construction-kit-ac-virtual-lab/latest/circuit-construction-kit-ac-virtual-lab_all.html'
            },{
                id:204,
                title: 'Charge simulation',
                description: 'This is a description for the card2.',
                imageUrl: '/images/charge.jpg',
                link: 'https://phet.colorado.edu/sims/html/charges-and-fields/latest/charges-and-fields_all.html'
            },
        ]
    }, {
        section: 'Chemistry', cardData: [
            {
                id:301,
                title: 'Molecule polarity simulation',
                description: 'This is a description for the card2.',
                imageUrl: '/images/molecule.jpg',
                link: 'https://phet.colorado.edu/sims/html/molecule-polarity/latest/molecule-polarity_all.html'
            }, {
                id:302,
                title: 'Gas properties simulation',
                description: 'This is a description for the card2.',
                imageUrl: '/images/gas.jpg',
                link: 'https://phet.colorado.edu/sims/html/gas-properties/latest/gas-properties_all.html'
            },
        ]
    }];
    return (
        <div>
            {pageData.map((section,j) => (
                <div key={j} >
                    <div className='font-black text-2xl text-blue-900 p-6' >{section.section}</div>
                    <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 p-4'>

                        {section.cardData.map((card) => (

                            <DjIntroCard key={card.id} {...card} />

                        ))}
                    </div>
                </div>

            )
            )
            }

        </div>
    )
}

export default page