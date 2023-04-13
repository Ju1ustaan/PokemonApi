import React from 'react'

const About = ({setIsShown}) => {
    return (
        <div className="flex flex-col   fixed top-20 right-0 w-full">



            <div className='modal__form ' onClick={() => setIsShown(false)}>

            </div>
            <div className="grid place-items-center mx-2 my-20 sm:my-auto">
                <div className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 px-6 py-10 sm:px-10 sm:py-6 bg-white rounded-lg shadow-md lg:shadow-lg relative z-10">

                    <button className=" w-8 h-8 absolute top-0 right-0 " onClick={() => setIsShown(false)}>
                        X
                    </button>
                    
                    <p className='text-6xl font-semibold mb-5'> About me </p>
                    <div className='flex justify-between mb-2.5'>
                        <p className='font-medium text-2xl'>Profession:</p>
                        <p className='font-medium text-2xl'>Frontend devoloper</p>
                    </div>
                    <div className='flex justify-between mb-2.5'>
                        <p className='font-medium text-2xl'>Name:</p>
                        <p className='font-medium text-2xl'>Djulustaan Luginov</p>
                    </div>
                    <div className='flex justify-between mb-2.5'>
                        <p className='font-medium text-2xl'>Date of Birth:</p>
                        <p className='font-medium text-2xl'>03.06.1993</p>
                    </div>
                    <div className=''>
                        <p className='font-medium text-2xl mb-2.5'>Skill's:</p>
                        <p className='font-medium text-2xl'>HTML5, CSS3, JavaScript, React, Redux, Bootstrap, Tailwind, TypeScript</p>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default About