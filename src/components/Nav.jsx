import React, { useState, useEffect } from 'react';

// styles
import {
  HeaderContainer,
  HeaderList,
  HeaderListItem,
  HeaderListItemLoc,
  HeaderIcons,
  HeaderSocialIcon,
  HeaderLink,
  NavBar,
  NavBarBrand,
  NavBarLink,
} from '../styles/Nav.styles';

//icons
import {
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { GoThreeBars } from 'react-icons/go';
import { TiTimes } from 'react-icons/ti';



const Nav = () => {

  const [checked, setChecked] = useState(false);


  useEffect(() => {
    const getBodyElem = document.getElementById('bodyElem');
    // console.log(getBodyElem);

    if (checked === true) {
      getBodyElem.style.overflow = 'hidden';
    } else {
      getBodyElem.style.overflow = 'visible';
    }
  }, [checked]);


  const closeModal = () => {
    setChecked(!checked);
  };

  return (
    <div>
      <div>
        <HeaderContainer>
          <HeaderList>
            <HeaderListItemLoc>
              <HeaderIcons>
                <FaMapMarkerAlt />
              </HeaderIcons>
              6 Aderupoko street, Off Ahmadiyya, Lagos, Nigeria.
            </HeaderListItemLoc>

            <HeaderListItem>
              <HeaderLink href="tel:08145212777" aria-label="Give us a call">
                <HeaderIcons>
                  <FaPhoneAlt />
                </HeaderIcons>
                Call: +2348145212777
              </HeaderLink>
            </HeaderListItem>

            <HeaderListItem>
              <HeaderLink href="mailto:" aria-label="Send a mail">
                <HeaderIcons>
                  <FaEnvelope />
                </HeaderIcons>
                musicity@gmail.com
              </HeaderLink>
            </HeaderListItem>

            <HeaderSocialIcon>
              <HeaderListItem>
                <HeaderLink
                  href="https://wa.me/2348145212777"
                  aria-label="Whatsapp contact"
                >
                  <FaWhatsapp />
                </HeaderLink>
              </HeaderListItem>

              <HeaderListItem>
                <HeaderLink href="/" aria-label="Facebook page">
                  <FaFacebookF />
                </HeaderLink>
              </HeaderListItem>

              <HeaderListItem>
                <HeaderLink
                  href="https://instagram.com/musicityacademy?igshid=YmMyMTA2M2Y="
                  aria-label="Instagram page"
                >
                  <FaInstagram />
                </HeaderLink>
              </HeaderListItem>

              <HeaderListItem>
                <HeaderLink href="/" aria-label="Youtube page">
                  <FaYoutube />
                </HeaderLink>
              </HeaderListItem>
            </HeaderSocialIcon>
          </HeaderList>
        </HeaderContainer>
      </div>

      <div>
        <NavBar>
          <input
            checked={checked}
            type="checkbox"
            onChange={closeModal}
            id="mobileMenu"
          />
          <label htmlFor="mobileMenu">
            <i id="bars">
              <GoThreeBars />
            </i>
            <i id="times">
              <TiTimes />
            </i>
          </label>

          <NavBarBrand>
            <a href="/">
              MusiCity <br /> <span>Academy</span>
            </a>{' '}
          </NavBarBrand>

          <ul className="nav-menu">
            <li className="nav-item">
              <NavBarLink href="/">Home</NavBarLink>
            </li>

            <li className="nav-item" onClick={closeModal}>
              <NavBarLink href="#about">About</NavBarLink>
            </li>

            <li className="nav-item" onClick={closeModal}>
              <NavBarLink href="#service">Services</NavBarLink>
            </li>

            <li className="nav-item" onClick={closeModal}>
              <NavBarLink href="#contact">Contact</NavBarLink>
            </li>

            <li className="nav-item">
              <a href="/" className="enroll-btn">
                Enroll Now
              </a>
            </li>
          </ul>

        </NavBar>
      </div>
    </div>
  );
};

export default Nav;
