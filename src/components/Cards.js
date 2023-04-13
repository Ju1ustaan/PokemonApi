import React from 'react'


const Cards = ({ image, name, weight, height }) => {
    return (
        <div class=" rounded-lg flex-shrink-0 flex-grow bg-gray-400 p-4 justify-center">
            <div class="poke__img">
                <img src={image} alt='pokeball' />
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
        </div>
    )
}

export default Cards