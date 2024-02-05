import { useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// Componentes de flecha
const PrevArrow = ({ onClick }: { onClick: () => void }) => (
  <button className='arrow-button left-arrow-button' onClick={onClick}>
    {'<'}
  </button>
)

const NextArrow = ({ onClick }: { onClick: () => void }) => (
  <button className='arrow-button right-arrow-button' onClick={onClick}>
    {'>'}
  </button>
)

const CarouselComponent = () => {
  const sliderRef = useRef<Slider>(null)

  const settings = {
    dots          : false,
    infinite      : true,
    nextArrow     : <NextArrow onClick={() => sliderRef.current && sliderRef.current.slickNext()} />,
    prevArrow     : <PrevArrow onClick={() => sliderRef.current && sliderRef.current.slickPrev()} />,
    slidesToScroll: 1,
    slidesToShow  : 1,
    speed         : 500
  }

  return (
    <Slider ref={sliderRef} {...settings} className='h-full'>
      <div className='h-full flex items-end flex-col'>
        <img alt='Slide 1' className='object-cover h-full w-full bottom-0 w-screen h-screen' src='/images/img1.jpg' />
      </div>
      <div className=''>
        <img alt='Slide 2' className='object-cover h-full w-full bottom-0 w-screen h-screen' src='/images/img2.jpg' />
      </div>
      {/* ... más diapositivas */}
    </Slider>
  )
}

export default CarouselComponent
