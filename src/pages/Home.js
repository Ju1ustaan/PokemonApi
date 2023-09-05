import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards'
import axios from 'axios'

const Home = ({ pokeName, selectedType, selectPerPage }) => {
    const [pokeArr, setPokeArr] = useState([])
    const [pokeType, setPokeType] = useState([])
    // const [name, setName] = useState('')

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
    }, [pokeName, selectPerPage])



    useEffect(() => {
        const getTypePoke = async () => {
            const { data } = await axios(`https://pokeapi.co/api/v2/type/${selectedType}`)
            try {
                setPokeType(data.pokemon)
            } catch {
                console.log('error1');
            }
        }
        getTypePoke()


        if (pokeType) {
            


            const getCategoriesItem = async (id) => {
                console.log(id);
                setPokeArr([])
                try {
                    const { data } = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`)
                    setPokeArr((prev) => [...prev, data]);

                } catch {
                    console.log('error404');
                }
            }
            getCategoriesItem()
            pokeType.map((el) => {
                getCategoriesItem(el?.pokemon?.name)
            })
        }
    }, [selectedType])




    // useEffect(() => {
    // if (pokeType) {
    //     const getCategoriesItem = async () => {
    //         setPokeArr([])
    //         const {data} = await axios(`https://pokeapi.co/api/v2/pokemon/${name}`)
    //         setPokeArr((prev) => [...prev, data]);
    //     }
    //     getCategoriesItem()

    // }
    // }, [name])


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

export default Home