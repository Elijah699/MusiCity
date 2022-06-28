import styled from 'styled-components';

export const HeaderContainer = styled.div`
  position: relative;
  margin-right: auto;
  margin-left: auto;
  padding: 20px;
  background-color: #242946;
  border-bottom: 1px solid #bbb;
  color: #fff;
  z-index: 1000;
  font-size: 14px;
  font-weight: 300;


  @media (max-width: 768px) {
    display: none;
  }
`;


export const HeaderList = styled.ul`
  list-style-type: none;
`;


export const HeaderIcons = styled.span`
  font-size: 14px;
  line-height: 16px;
  padding: 5px;
`;


export const HeaderListItem = styled.li`
  display: inline;
  line-height: 24px;
  padding: 0 15px;
  margin: 0 8px;
`;


export const HeaderListItemLoc = styled(HeaderListItem)`
  @media (max-width: 1200px) {
    display: none;
  }
`;


export const HeaderSocialIcon = styled.span`
  float: right;
  margin-right: 20px;
`;


export const HeaderLink = styled.a`
  text-decoration: none;
  color: #fff;

  &:hover {
    color: #f45b61;
  }
`;

// ======= NAVBAR =======
export const NavBar = styled.div`
  margin: 0 20px;
  padding: 20px;
  background: #fff;
  transition: all 0.5s;
  z-index: 997;


  .enroll-btn {
    text-decoration: none;
    font-size: 14px;
    border-radius: 5px;
    background-color: #f05b5a;
    padding: 13px;
    border: none;
    line-height: 8px;
    color: #fff;
    cursor: pointer;

    &:hover {
      background-color: #f02820;
    }
  }


  label #bars,
  label #times {
    color: #000;
    float: right;
    margin-right: 20px;
    padding-top: 12px;
    font-size: 20px;
    cursor: pointer;
    display: none;
  }


  #mobileMenu {
    display: none;
  }


  .nav-menu {
    display: inline-flex;
    list-style: none;
    float: right;
  }


  .nav-item {
    font-size: 14px;
    line-height: 24px;
    padding: 10px;
    font-weight: 400;
  }


  .nav-item:hover {
    cursor: pointer;
  }


  @media (max-width: 768px) {
    margin: 0 10px;


    label #bars {
      display: block;
    }


    .nav-menu {
      width: 100%;
      height: 100%;
      background-color: #fff;
      opacity: 0.9;
      position: fixed;
      top: 50px;
      left: -100%;
      text-align: center;
      transition: 0.5s;
      z-index: 10;
      display: block;
    }


    .nav-item {
      font-size: 20px;
      margin: 40px 0;
      line-height: 30px;
    }


    #mobileMenu:checked ~ ul {
      left: 0;
    }


    #mobileMenu:checked ~ label #bars {
      display: none;
    }


    #mobileMenu:checked ~ label #times {
      display: block;
    }

  }
`;


export const NavBarBrand = styled.div`
  display: inline-block;
  margin: 0 5px;


  a {
    text-decoration: none;
    font-family: 'Lato', sans-serif;
    font-size: 25px;

    &:hover {
      color: #f45b61;
    }
  }


  span {
    padding-left: 8px;
    font-size: 16px;
    font-weight: 300;
  }
`;


export const NavBarLink = styled.a`
  text-decoration: none;
  color: #000;

  &:hover {
    color: #f45b61;
  }
`;
