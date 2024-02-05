import React, { useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// Componentes de flecha
const PrevArrow = ({ onClick }: { onClick: () => void }) => (
  <button className="arrow-button" onClick={onClick}>
    {'<'}
  </button>
)

const NextArrow = ({ onClick }: { onClick: () => void }) => (
  <button className="arrow-button" onClick={onClick}>
    {'>'}
  </button>
)

const CarouselComponent = () => {
  const sliderRef = useRef<Slider>(null)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow onClick={() => sliderRef.current && sliderRef.current.slickPrev()} />,
    nextArrow: <NextArrow onClick={() => sliderRef.current && sliderRef.current.slickNext()} />,
  }

  return (
    <Slider ref={sliderRef} {...settings} className="h-full">
      <div className="h-full flex items-end flex-col">
        <img src="/images/img1.jpg" alt="Slide 1" className="object-cover h-full w-full bottom-0" />
      </div>
      <div className="">
        <img src="/images/img2.jpg" alt="Slide 2" className="object-cover h-full w-full bottom-0" />
      </div>
      {/* ... más diapositivas */}
    </Slider>
  )
}

export default CarouselComponent
