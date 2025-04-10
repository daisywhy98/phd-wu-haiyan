import React from 'react'
import DjIntroCard from '../componnets/DjIntroCard'

const page = () => {
    const pageData = [{
        section: 'Math', cardData: [
            {
                title: 'Graph Calculator',
                description: 'This is a description for the card1.',
                imageUrl: '/images/graphing.png',
                link: 'https://www.symbolab.com/graphing-calculator'
            }, {
                title: 'Calculus Calculator',
                description: 'This is a description for the card2.',
                imageUrl: '/images/calculus.png',
                link: 'https://www.symbolab.com/solver/calculus-calculator'
            }]
    }, {
        section: 'Physics', cardData: [
            {
                title: 'Forde simulation',
                description: 'This is a description for the card2.',
                imageUrl: '/images/force.jpg',
                link: 'https://phet.colorado.edu/sims/html/forces-and-motion-basics/latest/forces-and-motion-basics_all.html'
            }, {
                title: 'Wave interference simulation',
                description: 'This is a description for the card2.',
                imageUrl: '/images/wave.jpg',
                link: 'https://phet.colorado.edu/sims/html/wave-interference/latest/wave-interference_all.html'
            }, {
                title: 'Circuit simulation',
                description: 'This is a description for the card2.',
                imageUrl: '/images/circuit.jpg',
                link: 'https://phet.colorado.edu/sims/html/circuit-construction-kit-ac-virtual-lab/latest/circuit-construction-kit-ac-virtual-lab_all.html'
            },{
                title: 'Charge simulation',
                description: 'This is a description for the card2.',
                imageUrl: '/images/charge.jpg',
                link: 'https://phet.colorado.edu/sims/html/charges-and-fields/latest/charges-and-fields_all.html'
            },
        ]
    }, {
        section: 'Chemistry', cardData: [
            {
                title: 'Molecule polarity simulation',
                description: 'This is a description for the card2.',
                imageUrl: '/images/molecule.jpg',
                link: 'https://phet.colorado.edu/sims/html/molecule-polarity/latest/molecule-polarity_all.html'
            }, {
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
                <div>
                    <div className='font-black text-2xl text-blue-900 p-6'>{section.section}</div>
                    <div className='flex flex-row gap-4 justify-start'>

                        {section.cardData.map((card, i) => (

                            <DjIntroCard key={i+100*j} {...card} />

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