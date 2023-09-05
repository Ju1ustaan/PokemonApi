import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards'
import axios from 'axios'

const Home = ({pokeName}) => {
    const [pokeArr, setPokeArr] = useState([])
    console.log(pokeName);
    useEffect(() => {
        const getData = async(id) => {
            setPokeArr([])
            const {data} = await axios(`https://pokeapi.co/api/v2/pokemon/${pokeName? pokeName: id}/`)
            setPokeArr((prev) => {
                if(pokeName){
                    return [data]
                }else{
                    return [...prev, data]
                }
            })
        }
        const getPokeId = (number) => {
            for(let i = 1; i <= number; i++){
                getData(i)
            }
        }
        getPokeId(100)  
    }, [pokeName])
    
  

  return (
            <div class="w-full  flex justify-between mt-16">
                <div class=" w-full m-2 flex flex-wrap items-start justify-start rounded-tl grid-flow-col auto-cols-max gap-4">
                   {
                    pokeArr.map((el) => (
                        <Cards 
                        key={el.name} 
                        image={el.sprites.other.dream_world.front_default} 
                        name={el.name} 
                        weight={el.weight} 
                        height={el.height}/>
                    ))
                   }
                </div>
            </div>
  )
}

export default Home