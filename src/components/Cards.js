import React, { useState } from 'react'
import Modal from './Modal'


const Cards = ({ image, name, weight, height, obj }) => {
const [showDesc, setShowDesc] = useState(false)

return (
        <div  class="poke__card rounded-lg flex-shrink-0 flex-grow bg-gray-400 p-4 justify-center">
            <div onClick={() => setShowDesc(true)} class="poke__img">
                <img src={image} alt={name} />
            </div>
            <p class="poke__title text-5xl capitalize text-center font-semibold">{name}</p>
            <div class="flex justify-between">
                <p class="capitalize">weight</p>
                <p class="font-semibold">{weight}</p>
            </div>
            <div class="flex justify-between">
                <p class="capitalize">height</p>
                <p class="font-semibold">{height}</p>
            </div>
            {
                showDesc && <Modal obj={obj} setShowDesc={setShowDesc}/>
            }
        </div>
        
    )
}

export default Cards