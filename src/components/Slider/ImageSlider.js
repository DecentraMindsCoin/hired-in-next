import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
// import BtnSlider from './BtnSlider'
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/solid'

const dataSlider = [
  {
    id: uuidv4(),
    title: 'Lorem ipsum',
    subTitle: 'Lorem',
  },
  {
    id: uuidv4(),
    title: 'Lorem ipsum',
    subTitle: 'Lorem',
  },
  {
    id: uuidv4(),
    title: 'Lorem ipsum',
    subTitle: 'Lorem',
  },
  {
    id: uuidv4(),
    title: 'Lorem ipsum',
    subTitle: 'Lorem',
  },
  {
    id: uuidv4(),
    title: 'Lorem ipsum',
    subTitle: 'Lorem',
  },
]

const styles = {
  
}

const BtnSlider = ({ direction, moveSlide }) => {
  console.log(direction, moveSlide)
  return (
    <>
      <button
        onClick={moveSlide}
        className={direction === 'next' ? 'btn-slide next' : 'btn-slide prev'}
      >
        {direction === 'next' ? <ArrowRightIcon /> : <ArrowLeftIcon />}
      </button>
    </>
  )
}

const ImageSlider = () => {
  const [slideIndex, setSlideIndex] = useState(1)

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1)
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1)
    }
  }

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length)
    }
  }

  const moveDot = (index) => {
    setSlideIndex(index)
  }

  return (
    <div className="container-slider">
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={slideIndex === index + 1 ? 'slide active-anim' : 'slide'}
          >
            <img
              src={process.env.PUBLIC_URL + `../../Imgs/img${index + 1}.jpeg`}
              alt="slide show image"
            />
          </div>
        )
      })}
      <BtnSlider moveSlide={nextSlide} direction={'next'} />
      <BtnSlider moveSlide={prevSlide} direction={'prev'} />
      <div className="container-dots">
        {Array.from({ length: 5 }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? 'dot active' : 'dot'}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default ImageSlider
