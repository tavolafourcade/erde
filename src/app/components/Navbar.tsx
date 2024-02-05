import React from 'react'
import Logo from '../../../public/images/Logo'
import { Language } from '../utils/types';

interface Props {
  toggleLanguage: (language: Language) => void;
  activeButton: Language;
}
const Navbar = ({ toggleLanguage, activeButton }: Props) => {
  return (
    <nav className='bg-primary' >
      <div className="mx-auto md:px-16 flex justify-between md:py-5 py-4 px-4">
        <Logo />
        <div>
          <button
            onClick={() => toggleLanguage(Language.ES)}
            className={`w-10 h-10 border border-secondary rounded-full mr-2 text-white font-gantari ${activeButton === Language.ES ? 'bg-secondary' : ''}`}
            >
            <span>ES</span>
          </button>     
          <button
            onClick={() => toggleLanguage(Language.EN)}
            className={`w-10 h-10 border border-secondary rounded-full text-white font-gantari ${activeButton === Language.EN ? 'bg-secondary' : ''}`}>
            <span>EN</span>
          </button>  
        </div>
      </div>
    </nav>
  )
}

export default Navbar