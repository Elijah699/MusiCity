// styles
import { ServiceWrapper, FlexCon } from '../styles/Service.styles';

// icons
import { BsCameraFill } from 'react-icons/bs';
import { BiVideoRecording } from 'react-icons/bi';
import { AiFillSound } from 'react-icons/ai';
import { CgArrowLongRight } from 'react-icons/cg';

const Service = () => {
  return (
    <ServiceWrapper id="service">
      <div className="services">
        <h2>SERVICES</h2>

        <FlexCon>
          <div
            className="first-card"
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="400"
            data-aos-easing="linear"
          >
            <div className="icon">
              <BsCameraFill />
            </div>

            <h4 className="service-title">Photography</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </p>
            <button className="service-btn">
              MORE ON PHOTOGRAPHY
              <i>
                <CgArrowLongRight />
              </i>
            </button>
          </div>

          <div className="second-card" data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="150"
                  data-aos-easing="linear">
            <div className="icon" delay="200">
              <BiVideoRecording />
            </div>

            <h4 className="service-title">Videography</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </p>
            <button className="service-btn">
              MORE ON VIDEOGRAPHY
              <i>
                <CgArrowLongRight />
              </i>
            </button>
          </div>

          <div
            className="third-card"
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            data-aos-easing="linear"
          >
            <div className="icon">
              <AiFillSound />
            </div>

            <h4 className="service-title">Sound System</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </p>
            <button className="service-btn">
              MORE ON SOUNDS
              <i>
                <CgArrowLongRight />
              </i>
            </button>
          </div>
        </FlexCon>
      </div>
    </ServiceWrapper>
  );
};

export default Service;
