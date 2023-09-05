import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards'
import axios from 'axios'

const Home = ({ pokeName, selectedType, selectPerPage }) => {
    const [pokeArr, setPokeArr] = useState([])

    // Функция котороя выводит определенное количество покемонов и выполняет запрос по id покемона выводя на экран определенного
    useEffect(() => {
        const getData = async (id) => {
            setPokeArr([])
            try {
                const { data } = await axios(`https://pokeapi.co/api/v2/pokemon/${pokeName ? pokeName : id}`)
                setPokeArr((prev) => {
                    if (pokeName) {
                        return [data]
                    } else {
                        return [...prev, data]
                    }
                })
            }
            catch{
                alert('Такой покемон не найден, попробуйте снова.')
            }
        }
        const getPokeId = (number) => {
            for (let i = 1; i <= number; i++) {
                getData(i)
            }
        }
        if(pokeName){
            getPokeId(1)
        }else{
            getPokeId(selectPerPage)
        }
    }, [pokeName, selectPerPage])

    

    return (
        <div class="w-full  flex justify-between mt-16">
            <div class=" w-full m-2 flex flex-wrap items-start justify-start rounded-tl grid-flow-col auto-cols-max gap-4">
                {
                    pokeArr.map((el) => (
                        <Cards
                            key={el.name}
                            image={el.sprites?.other.dream_world.front_default}
                            name={el.name}
                            weight={el.weight}
                            height={el.height} />
                    ))
                }
            </div>
        </div>
    )
}

export default Home