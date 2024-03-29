import React, {useEffect, useState} from 'react'
import pokeball from '../assets/images/pokeball.jpg'
import About from './About'
import Info from './Info'
import Contact from './Contact'
import Gear from './Gear'
import axios from 'axios'

const Navbar = ({setPokeName, selectedType, setSelectedType, setSelectPerPage, selectPerPage}) => {
    const [isShown, setIsShown] = useState(false)
    const [isShownInfo, setIsShownInfo] = useState(false)
    const [isShownContact, setIsShownContact] = useState(false)
    const [isShownGear, setIsShownGear] = useState(false)

    const [pokeType, setPokeType] = useState([])

    
    // В этой функции я сохраняю в useState значение инпута, для дальнейшего поиска по ней
    const search = (e) => {
        if(e.key === 'Enter'){
            setPokeName(e.target.value.toLowerCase())
            e.target.value = ''
        }
    }

    // В этой функции я сохраняю в useState значение текущего селекта, для дальнейшей сортировки по категориям
    const handleTypeChange = (e) => {
        setSelectedType(e.target.value)
    }

    // Здесь делаю запрос, список категорий
    useEffect(() => {
        const getPokeType = async () => {
            const {data} = await axios('https://pokeapi.co/api/v2/type')
            setPokeType(data.results);
        }
        getPokeType()
    }, [])

    const handlePerPage = (e) => {
        setSelectPerPage(e.target.value)
    }
    

    return (
        <>


            <aside class=" w-16 h-screen flex flex-col space-y-10 items-center justify-center bg-gray-800 text-white sticky left-0 top-0">

                <div class="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor" onClick={() => setIsShown(true)}><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"  /></svg>
                </div>


                <div class="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={() => setIsShownInfo(true)}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                </div>


                <div class="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
                    <svg onClick={() => setIsShownContact(true)} xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                </div>


                <div class="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
                    <svg onClick={() => setIsShownGear(true)} xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </div>
            </aside>

            <header class="h-16 w-full flex items-center absolute justify-end px-5 space-x-10 bg-gray-800 fixed left-0 top-0">
            <div className='flex items-center'>
                <p className='mr-5 text-lg text-white'>Per Page:</p>
                <select value={selectPerPage} onChange={handlePerPage}>
                    <option value='10'>10</option>
                    <option value='25'>25</option>
                    <option value='50'>50</option>
                    <option value='100'>100</option>
                </select>
            </div>
            <select value={selectedType} onChange={handleTypeChange}>
                <option >Category</option>
                {
                    pokeType.map((type) => <option value={type.name}>{type.name}</option>)
                }
            </select>

            <input type='text' placeholder='Search...' onKeyDown={search}/>

                <div class="flex flex-shrink-0 items-center space-x-4 text-white">


                    <div class="flex flex-col items-end ">

                        <div class="text-md font-medium ">PokemonApi</div>

                        <div class="text-sm font-regular"></div>
                    </div>


                    <div class="h-10 w-10 rounded-full cursor-pointer bg-gray-200 border-2 border-blue-400 overflow-hidden">
                        <img src={pokeball} alt='pokeball' />
                    </div>
                </div>
            </header>
            {
                isShown && <About setIsShown={setIsShown} />
            }
            {
                isShownInfo && <Info setIsShownInfo={setIsShownInfo} />
            }
            {
                isShownContact && <Contact setIsShownContact={setIsShownContact} />
            }
            {
                isShownGear && <Gear setIsShownGear={setIsShownGear} />
            }


        </>

    )
}

export default Navbar