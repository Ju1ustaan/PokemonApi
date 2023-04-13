import React from 'react'
import pikachu from '../assets/images/Pikachu.jpg'

const Gear = ({setIsShownGear}) => {
  return (
    <div className="flex flex-col   fixed top-20 right-0 w-full">



    <div className='modal__form ' onClick={() => setIsShownGear(false)}>

    </div>
    <div className="grid place-items-center mx-2 my-20 sm:my-auto">
        <div className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 px-6 py-10 sm:px-10 sm:py-6 bg-white rounded-lg shadow-md lg:shadow-lg relative z-10">

            <button className=" w-8 h-8 absolute top-0 right-0 " onClick={() => setIsShownGear(false)}>
                X
            </button>
            
            <img src={pikachu} alt='pikachu'/>
            <p className='font-medium text-2xl text-center'>Спасибо за внимание!</p>
        </div>

    </div>

</div>
  )
}

export default Gear