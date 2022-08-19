import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

// styles
import { HomeContainer } from '../styles/Home.styles';

// images
import First from '../assets/First.jpg';
import Second from '../assets/Second.jpg';
import Third from '../assets/Third.jpg';
import Fourth from '../assets/Fourth.jpg';
import Fifth from '../assets/Fifth.jpeg';
import Sixth from '../assets/Sixth.jpg';

const Home = () => {
  return (
    <HomeContainer id="home">
      <div>
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showStatus={false}
          autoPlay={true}
          autoFocus={true}
          stopOnHover={true}
          swipeable={true}
          showIndicators={true}
          useKeyboardArrows={true}
          emulateTouch={true}
          showThumbs={false}
          dynamicHeight={true}
        >
          <div className="">
            <img src={First} alt="first-slide" />
            {/* <h2>This is MusiCity</h2> */}
          </div>
          <div>
            <img src={Second} alt="second-slide" />
          </div>
          <div>
            <img src={Third} alt="third-slide" />
          </div>
          <div>
            <img src={Fourth} alt="fourth-slide" />
          </div>
          <div>
            <img src={Fifth} alt="fifth-slide" />
          </div>
          <div>
            <img src={Sixth} alt="sixth-slide" />
          </div>
        </Carousel>
      </div>
    </HomeContainer>
  );
};

export default Home;
