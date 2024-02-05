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
    <div className='h-screen flex flex-col'>
      <Navbar activeButton={activeButton} toggleLanguage={toggleLanguage} />
      {/* <div className="flex-1 flex flex-col items-center justify-end relative"> */}

      <div className='flex-1 flex-col justify-end items-center overflow-hidden relative '>
        <CarouselComponent />

        <div className='absolute left-1/2 transform -translate-x-1/2 text-center'>
          <span className='text-primary text-25 font-normal'>{launchDate}</span>
          <span className='text-primary text-25 font-normal'>{title}</span>
          <span className='text-primary text-25 font-normal'>{subTitle}</span>
        </div>

        <div className='absolute bottom-4 transform -translate-x-1/2 text-center'>
          <span>{contact} <strong>{email}</strong></span>
        </div>
      </div>
    </div>
  )
}

export default Home
