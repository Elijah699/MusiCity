// styles
import { FooterWrapper, FlexCon } from '../styles/Footer.styles';

// icons
import {
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa';
const Footer = () => {
  return (
    <FooterWrapper>
      <FlexCon>
        <div className="first-col">
          <div className="brand-name">
            <a href="/">
              MusiCity <br /> <span>Academy</span>
            </a>{' '}
          </div>

          <a
            className="first-col-link"
            href="tel:08145212777"
            aria-label="Give us a call"
          >
            <span className="first-col-icon">
              <FaPhoneAlt />
            </span>
            Call: +2348145212777
          </a>

          <a className="first-col-link" href="mailto:" aria-label="Send a mail">
            <span className="first-col-icon">
              <FaEnvelope />
            </span>
            musicity@gmail.com
          </a>
        </div>

        <div className="second-col">
          <div className="second-col-a">
            <ul>
              <h5>Useful Link</h5>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/service">Services</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="second-col-b">
            <ul>
              <h5>Services</h5>
              <li>
                <a href="/">photography</a>
              </li>
              <li>
                <a href="/">videography</a>
              </li>
              <li>
                <a href="/">sound system</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="third-col">
          <a
            className="third-col-link"
            href="/"
            aria-label="Facebook page"
          >
            <FaFacebookF />
          </a>

          <a
            className="third-col-link"
            href="https://wa.me/2348145212777"
            aria-label="Whatsapp contact"
          >
            <FaWhatsapp />
          </a>
          <a
            className="third-col-link"
            href="https://instagram.com/musicityacademy?igshid=YmMyMTA2M2Y="
            aria-label="Instagram page"
          >
            <FaInstagram />
          </a>

          <a
            className="third-col-link"
            href="/"
            aria-label="Youtube page"
          >
            <FaYoutube />
          </a>
        </div>
      </FlexCon>
      <div className='devCreed'>
        <small>
          Designed by <a href="/">devCreed</a>
        </small>
        <small>
          <b>NOTE:</b> This is NOT MusiCity Official Website.
        </small>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
