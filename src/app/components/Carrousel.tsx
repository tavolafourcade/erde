import { useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Arrow from '../../../public/images/Arrow'
import Background from '../../../public/images/Background'

// Componentes de flecha
const PrevArrow = ({ onClick }: { onClick: () => void }) => (
  <button className='arrow-button left-arrow-button' onClick={onClick}>
    <Arrow />
  </button>
)

const NextArrow = ({ onClick }: { onClick: () => void }) => (
  <button className='arrow-button right-arrow-button' onClick={onClick}>
    <Arrow />
  </button>
)

const CarouselComponent = () => {
  const sliderRef = useRef<Slider>(null)

  const images = [
    '/images/img1.jpg',
    '/images/img2.jpg',
    '/images/img3.jpg',
    '/images/img4.jpg',
    '/images/img5.jpg',
    '/images/img6.jpg',
  ];

  const settings = {
    dots          : false,
    infinite      : true,
    nextArrow     : <NextArrow onClick={() => sliderRef.current && sliderRef.current.slickNext()} />,
    prevArrow     : <PrevArrow onClick={() => sliderRef.current && sliderRef.current.slickPrev()} />,
    slidesToScroll: 1,
    slidesToShow  : 1,
    speed         : 500
  }

  // style={{
  //   backgroundImage: 'linear-gradient(90deg, rgba(0, 0, 0, 0.44) 35%, rgba(0, 0, 0, 0.00) 57.49%)',
  //   backgroundBlendMode: 'multiply',
  // }}

  return (
    <Slider ref={sliderRef} {...settings} className='h-full relative'>
      {images.map((image, index) => (
        <div key={index} className='relative'>
          {/* <Background /> */}
          <div className='absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent mix-blend-multiply'></div>
          <img alt={`Slide ${index + 1}`} className='object-cover bottom-0 w-screen h-screen' src={image} />
        </div>
      ))}
    </Slider>
  )
}

export default CarouselComponent
