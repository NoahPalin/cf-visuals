import { React, useState } from 'react'
import { Carousel } from 'react-bootstrap'
import '../styles/home-carousel.css'

import img2 from "./images/photoshoots/linh-photoshoot/DSC_0106.jpg";
import img3 from "./images/photoshoots/bliss-photoshoot/DSC_0331.jpg";
import img4 from "./images/photoshoots/scrub-daddy-photoshoot/scrub-daddy.png";

function HomeCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel fade>
      Carousel Item
      <Carousel.Item>
        <img
          className="d-block slide-image"
          src={img2}
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>Lin</h3> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block slide-image"
          src={img3}
          alt="Second slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block slide-image"
          src={img4}
          alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;
