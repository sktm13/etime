import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import bannerImage from '../style/image/sample_Banner.png';


function MakeCarousel() {
  return (
    <div className="carousel-container">
    <Carousel className="carousel">
      <Carousel.Item>
        <Image src={bannerImage} text="First slide" className="carousel-image"  />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={bannerImage} text="Second slide" className="carousel-image"  />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={bannerImage} text="Third slide" className="carousel-image"/>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default MakeCarousel;