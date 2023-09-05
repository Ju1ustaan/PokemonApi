import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Modal = ({setShowDesc, obj}) => {
// console.log(obj);
const [moreInfo, setMoreInfo] = useState(null)
useEffect(() => {
    const getInfo = async () => {
        const {data} = await axios(`https://pokeapi.co/api/v2/pokemon-species/${obj.id}`)
        setMoreInfo(data);
    }
    getInfo()
}, [])
console.log(moreInfo);

return (
    <div className="flex flex-col   fixed top-20 right-0 w-full">



    <div className='modal__form ' onClick={() => setShowDesc(false)}>

    </div>
    <div className="grid place-items-center mx-2 my-20 sm:my-auto">
        <div className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-8/12 px-6 py-10 sm:px-10 sm:py-6  rounded-lg shadow-md lg:shadow-lg bg-white relative z-10">

            <button className=" w-8 h-8 absolute top-0 right-0 " onClick={() => setShowDesc(false)}>
                X
            </button>
            <p className='text-6xl font-bold capitalize'>{obj.name}</p>
            <div className='flex'>
            <div className='modal__img'>
                <img src={obj?.sprites?.other?.home?.front_default} alt={obj.name}/>
            </div>
            <div className='modal__desc'>
                <p className='text-2xl font-bold mb-10'>{moreInfo?.flavor_text_entries[0]?.flavor_text.replace('\f', ' ')}</p>
                <p className='text-lg font-bold capitalize'>habitat: {moreInfo?.habitat?.name}</p>
                <p className='text-lg font-bold capitalize'>growth rate: {moreInfo?.growth_rate?.name}</p>
                <p className='text-lg font-bold capitalize'>generation: {moreInfo?.generation?.name}</p>
                <p className='text-lg font-bold capitalize'>shape: {moreInfo?.shape?.name}</p>
            </div>
            </div>
        </div>

    </div>

</div>
  )
}

export default Modal