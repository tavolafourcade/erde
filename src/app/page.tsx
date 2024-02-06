'use client'

import { useState } from 'react'
import Navbar from './components/Navbar'
import { Language } from './utils/types'
import { content } from './utils/content'
import CarouselComponent from './components/Carrousel'

const Home = () => {
  const [ activeButton, setActiveButton ] = useState(Language.EN)
  const { launchDate, title, subTitle, contact, email } = content[activeButton]

  const toggleLanguage = (language: Language) => {
    setActiveButton(language)
  }

  return (
    <div className='h-screen flex flex-col overflow-hidden'>
      <Navbar activeButton={activeButton} toggleLanguage={toggleLanguage} />

      <div>
        <CarouselComponent />

        <div className='absolute ml-6 mr-12 top-32 lg:top-60 lg:w-[45rem] lg:ml-[10rem] lg:h-[38rem] flex flex-col justify-between'>
          <div className='  text-white flex flex-col'>
            <span className='text-sm lg:text-2xl'>{launchDate}</span>
            <span className='text-3xl lg:text-[3.125rem] font-bold lg:leading-[3.5rem] pt-4 pb-5'>{title}</span>
            <span className='text-base lg:text-2xl font-normal'>{subTitle}</span>
          </div>
          <div className='hidden text-white lg:text-xl'>
            <span>{contact} <strong>{email}</strong></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
