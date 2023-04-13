import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards'
import axios from 'axios'

const Home = () => {
    const [pokeArr, setPokeArr] = useState([])

    useEffect(() => {
        const getData = async(id) => {
            const {data} = await axios(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            setPokeArr((pokeArr) => [...pokeArr, data])
        }
        const getPokeId = (number) => {
            for(let i = 1; i <= number; i++){
                getData(i)
            }
        }
        getPokeId(20)  
    }, [])
    
    console.log(pokeArr);
  return (
            <div class="w-full  flex justify-between mt-16">
                <div class=" w-full m-2 flex flex-wrap items-start justify-start rounded-tl grid-flow-col auto-cols-max gap-4">

                   {
                    pokeArr.map((el) => (
                        <Cards image={el.sprites.front_default} name={el.name} weight={el.weight} height={el.height}/>
                    ))
                   }
            
                </div>
            </div>

    

  )
}

export default Home