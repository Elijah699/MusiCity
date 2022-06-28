import styled from 'styled-components';


export const FooterWrapper = styled.div`
  background-color: #242946;
  color: #fff;
  padding: 40px 20px 30px;


  .devCreed {
    text-align: center;
    margin-top: 15px;
    padding-top: 10px;
    font-family: 'Lato', sans-serif;

    small {
      display: block;
      margin: 10px 0;
    }


    a {
      color: #f45b61;
      text-decoration: none;

      &:hover {
        color: #fff;
      }
    }

  }
`;


export const FlexCon = styled.div`
  margin: 0 20px;
  display: flex;
  flex-direction: row;


  .brand-name {
    display: block;
    margin: 0 5px 20px;


    a {
      text-decoration: none;
      font-family: 'Lato', sans-serif;
      font-size: 25px;
      color: #fff;

      &:hover {
        color: #f45b61;
      }
    }


    span {
      padding-left: 8px;
      font-size: 16px;
      font-weight: 300;
    }

  }


  .first-col,
  .second-col,
  .third-col {
    width: 33.3333%;
  }


  .first-col-link {
    display: block;
    text-decoration: none;
    color: #fff;
    font-size: 14px;
    margin: 15px 0;

    &:hover {
      color: #f45b61;
    }
  }


  .first-col-icon {
    margin-right: 5px;
  }


  /* Second-col */
  .second-col {
    display: flex;
    flex-direction: row;

    ul {
      list-style-type: none;
    }

    li {
      margin: 10px 0;
    }

    a {
      text-decoration: none;
      color: #fff;
      font-size: 14px;

      &:hover {
        color: #f45b61;
      }
    }


    .second-col-a,
    .second-col-b {
      padding-top: 10px;
      width: 50%;
    }

  }

  /* Third-col */

  .third-col {
    padding-top: 20px;
    text-align: center;
  }


  .third-col-link {
    font-size: 20px;
    margin-right: 10px;
    background: #242946;
    color: #fff;
    border: 1px solid #fff;
    padding: 5px 7px;
    border-radius: 50%;
    line-height: 1.6;
    width: 40px;
    height: 40px;
    transition: 0.3s;
    text-align: center;

    svg {
      padding-top: 3px;
    }

    &:hover {
      background: #f45b61;
      border-color: #f45b61;
    }
  }


  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0;
    margin: 10px 0;


    .first-col,
    .second-col,
    .third-col {
      width: 100%;
    }


    .second-col {
      flex-direction: column;
    }


    .second-col-a,
    .second-col-b {
      width: 100%;
      margin-bottom: 15px;
    }

  }
`;
