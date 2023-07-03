import './Slider.scss';
import sliderImg1 from '../../assets/slider-1.jpg';
import sliderImg2 from '../../assets/slider-2.jpg';
import sliderImg3 from '../../assets/slider-3.jpg';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';
import { useState } from 'react';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : currentSlide + 1);
  };

  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <div className="slider1">
          <img src={sliderImg1} alt="" />
          <div className="slider1Title">CHICKCOTOUR</div>
          <div className="slider1Text">
            Fashion is the armor to survive the reality of everyday life.
          </div>
        </div>
        <div className="slider2">
          {' '}
          <img src={sliderImg2} alt="" />
        </div>
        <div className="slider3">
          {' '}
          <img src={sliderImg3} alt="" />
        </div>
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <BiLeftArrow />
        </div>
        <div className="icon" onClick={nextSlide}>
          <BiRightArrow />
        </div>
      </div>
    </div>
  );
};

export default Slider;
