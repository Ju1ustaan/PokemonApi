import React from 'react'

const Info = ({setIsShownInfo}) => {
  return (
    <div className="flex flex-col   fixed top-20 right-0 w-full">



    <div className='modal__form ' onClick={() => setIsShownInfo(false)}>

    </div>
    <div className="grid place-items-center mx-2 my-20 sm:my-auto">
        <div className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 px-6 py-10 sm:px-10 sm:py-6 bg-white rounded-lg shadow-md lg:shadow-lg relative z-10">

            <button className=" w-8 h-8 absolute top-0 right-0 " onClick={() => setIsShownInfo(false)}>
                X
            </button>
            
           <p className='font-medium text-3xl text-center'>
            Доброго времени суток уважаемый пользователь! 
           </p>
            <p className='font-medium text-2xl text-center'>
            Если вы читаете это сообщеение, то вас заинтересовал мой проект. Этот проект я сделал для улучшения своих навыков работы с API. Как и ожидалось оптравлять запросы на сервер не составило особого труда, проблемы возникли когда я получил данные. И здесь как пологается натоящему разработчику я стал искать решение во всемирной паутине, как мы знаем нет не решенных проблем и мой случай не стал исключением.    
            В этой работе я использую API с сайта <a href='https://pokeapi.co/'>https://pokeapi.co/</a>, так же использовал библиотеку <a href='https://tailwindcss.com/'>https://tailwindcss.com/</a>. 
            </p>
            {/* <p className='font-medium text-2xl text-center'>Спасибо за внимание!</p> */}
        </div>

    </div>

</div>
  )
}

export default Info