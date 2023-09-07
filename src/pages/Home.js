import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards'
import axios from 'axios'

const Home = ({ pokeName, selectedType, selectPerPage }) => {
    const [loader, setLoader] = useState(false)
    const [pokeArr, setPokeArr] = useState([])
    const [pokeType, setPokeType] = useState(null)
    // const [name, setName] = useState('')

    // Функция котороя выводит определенное количество покемонов и выполняет запрос по id покемона выводя на экран определенного
    useEffect(() => {
        const getData = async (id) => {
            setLoader(true)
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
                setLoader(false)
            }
            catch {
                alert('Такой покемон не найден, попробуйте снова.')
            }
        }

        const getPokeId = (number) => {
            for (let i = 1; i <= number; i++) {
                getData(i)
            }
        }
        if (pokeName) {
            getPokeId(1)
        } else {
            getPokeId(selectPerPage)
        }
        setLoader(false)
    }, [pokeName, selectPerPage])



    useEffect(() => {
        setLoader(true)
        const getTypePoke = async () => {
            try {
                const { data } = await axios(`https://pokeapi.co/api/v2/type/${selectedType}`)
                setPokeType(data.pokemon)
                setLoader(false)
            } catch {
                console.log('error1');
            }
        }
        getTypePoke()
    }, [selectedType])

    useEffect(() => {
        if (pokeType) {
            setLoader(true)
            const getCategoriesItem = async (id) => {
                setPokeArr([])
                try {
                    const { data } = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`)
                    setPokeArr((prev) => [...prev, data]);
                    setLoader(false)
                } catch {
                    console.log('error404');
                }
            }
            getCategoriesItem()
            pokeType.map((el) => {
                getCategoriesItem(el?.pokemon?.name)
            })
        }
    }, [pokeType])


    if (loader) {
        return (
            <div class="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
                <div class="border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 h-64 w-64"></div>
            </div>
        )
    }else{
        return (
            <div class="w-full  flex justify-between mt-16">
                <div class=" w-full m-2 flex flex-wrap items-start justify-start rounded-tl grid-flow-col auto-cols-max gap-4">
                    {
                        pokeArr.map((el) => (
                            <Cards
                                key={el?.name}
                                image={el?.sprites?.other.dream_world.front_default}
                                name={el?.name}
                                weight={el?.weight}
                                height={el?.height}
                                obj={el} />
                        ))
                    }
                </div>
            </div>
        )
    }
    
}



export default Home