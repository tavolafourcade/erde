import { useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Arrow from '../../../public/images/Arrow'
// import Background from '../../../public/images/Background'
import Image from 'next/image'

// Componentes de flecha
const PrevArrow = ({ onClick }: { onClick: () => void }) => (
  <button className='arrow-button left-arrow-button max-lg:absolute max-lg:bottom-8 max-lg:left-[40%] max-lg:right' onClick={onClick}>
    <Arrow />
  </button>
)

const NextArrow = ({ onClick }: { onClick: () => void }) => (
  <button className='arrow-button right-arrow-button max-lg:absolute max-lg:bottom-8 max-lg:left-[55%]' onClick={onClick}>
    <Arrow />
  </button>
)

const CarouselComponent = () => {
  const sliderRef = useRef<Slider>(null)

  const images = [
    { height: 1080, src: '/images/img1.jpg', width: 1920 },
    { height: 1080, src: '/images/img2.jpg', width: 1920 },
    { height: 1080, src: '/images/img3.jpg', width: 1920 },
    { height: 1080, src: '/images/img4.jpg', width: 1920 },
    { height: 1080, src: '/images/img5.jpg', width: 1920 },
    { height: 1080, src: '/images/img6.jpg', width: 1920 }
  ]

  const settings = {
    autoplay      : true,
    autoplaySpeed : 5000,
    dots          : false,
    infinite      : true,
    nextArrow     : <NextArrow onClick={() => sliderRef.current && sliderRef.current.slickNext()} />,
    prevArrow     : <PrevArrow onClick={() => sliderRef.current && sliderRef.current.slickPrev()} />,
    slidesToScroll: 1,
    slidesToShow  : 1,
    speed         : 500
  }

  return (
    <Slider ref={sliderRef} {...settings} className='h-[80vh] lg:h-full relative'>
      {images.map((image, index) => (
        <div className='relative' key={index}>
          {/* <Background /> */}
          <div className='absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent mix-blend-multiply'></div>
          <Image
            alt={`Slide ${index + 1}`}
            className='object-cover bottom-0 w-screen lg:h-screen h-[80vh]'
            height={image.height}
            src={image.src}
            width={image.width} />
        </div>
      ))}
    </Slider>
  )
}

export default CarouselComponent
