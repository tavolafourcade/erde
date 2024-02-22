import Logo from '../../../public/images/Logo'
import { Language } from '../utils/types'

interface Props {
  toggleLanguage: (language: Language) => void;
  activeButton: Language;
}
const Navbar = ({ toggleLanguage, activeButton }: Props) => (
  <nav className='bg-primary fixed top-0 left-0 right-0 z-10' >
    <div className='mx-auto md:px-16 flex justify-between py-4 px-4'>
      <Logo />
      <div>
        <button
          className={`w-10 h-10 border border-secondary rounded-full mr-2 text-white font-gantari ${activeButton === Language.ES ? 'bg-secondary' : ''}`}
          onClick={() => toggleLanguage(Language.ES)}>
          <span>ES</span>
        </button>
        <button
          className={`w-10 h-10 border border-secondary rounded-full text-white font-gantari ${activeButton === Language.EN ? 'bg-secondary' : ''}`}
          onClick={() => toggleLanguage(Language.EN)}>
          <span>EN</span>
        </button>
      </div>
    </div>
  </nav>
)

export default Navbar
