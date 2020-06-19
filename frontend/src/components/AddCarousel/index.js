import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import logo from '../../images/pizza.jpg'

const items = [
  {
    src:`${logo}`,
    width:'80%',
    aling: 'center',
    altText: 'Slide 1',
    caption: 'Slide 1',
    opacity:0.5,
  },
  {
    src:`${logo}`,
    width:'80%',
    aling: 'center',
    altText: 'Slide 2',
    caption: 'Slide 2',
    opacity:0.5,
  },
  {
    src:`${logo}`,
    width:'80%',
    aling: 'center',
    altText: 'Slide 3',
    caption: 'Slide 3',
    opacity:0.5,
  }
];

const AddCarousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <div className ="d-flex justify-content-center">
        <img style={{opacity:'1'}} src={item.src} alt={item.altText} width={item.width} aling={item.aling} />
        </div>
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <div className ="d-flex justify-content-center">
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
{/*       <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} /> */}
    </Carousel>
    </div>
  );
}

export default AddCarousel;
