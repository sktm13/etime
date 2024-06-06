import { useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import banner1 from '../style/image/banner1.png';
import banner2 from '../style/image/banner2.png';


function MakeCarousel() {

  const navigate = useNavigate();

  return (
    <div className="carousel-container">
    <Carousel className="carousel" variant="dark">
      
      <Carousel.Item>
        <Image src={banner1} text="First slide" className="carousel-image"  />
        <Carousel.Caption>
        <div className="carousel-button-container1 d-flex justify-content-center">
            <Button variant="outline-primary" size="sm" className="carousel-button1">#스포츠</Button>
            <Button variant="outline-primary" size="sm" className="carousel-button1">#문화</Button>
            <Button variant="outline-primary" size="sm" className="carousel-button1">#여행/일상</Button>
            <Button variant="outline-primary" size="sm" className="carousel-button1">#IT/기기/음향</Button>
            <Button variant="outline-primary" size="sm" className="carousel-button1">#뷰티/패션</Button>
            <Button variant="outline-primary" size="sm" className="carousel-button1">#반려동물/식물</Button>
            <Button variant="outline-primary" size="sm" className="carousel-button1">#건강/의료</Button>
            <Button variant="outline-primary" size="sm" className="carousel-button1">#어학/학습</Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

    
      <Carousel.Item>
        <Image src={banner2} text="Second slide" className="carousel-image"  />
        <Carousel.Caption>
        <div className="carousel-button-container2 d-flex justify-content-center">
            <Button variant="outline-primary" size="lg" 
            onClick={() => navigate('/pages/login')}
            className="carousel-button2">전문가 신청하기</Button>
          </div>        
          </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default MakeCarousel;