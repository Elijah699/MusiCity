import styled from 'styled-components';

export const ServiceWrapper = styled.div`
  margin: 15px 20px;
  padding: 20px;


  h2 {
    margin-bottom: 10px;
    text-align: center;
    font-family: 'Lato', sans-serif;
  }


  i {
    margin-left: 5px;
  }


  .services {
    margin-top: 20px;
  }


  .icon {
    font-size: 40px;
    color: #4a5ed8;

    &:hover {
      color: #f02820;
    }
  }


  .service-title {
    margin: 10px;
  }


  .first-card,
  .second-card,
  .third-card {
    text-align: center;
    max-width: 33.333333%;
    height: 325px;
    padding: 30px;
    border-radius: 5px;
    box-shadow: 0 0 5px 2px rgb(192 188 188);
  }


  .first-card {
    margin: 20px 10px;
  }


  .second-card {
    margin: 80px 10px;
  }


  .third-card {
    margin: 140px 10px;
  }


  .service-btn {
    margin-top: 35px;
    padding: 10px;
    width: 100%;
    border-radius: 3px;
    font-size: 12px;
    cursor: pointer;
    border: none;
    background-color: #3148b8;
    color: #fff;

    &:hover {
      background-color: #5268d1;
    }
  }


  @media (max-width: 1140px) {
    .first-card,
    .second-card,
    .third-card {
      height: fit-content;
    }
  }


  @media (max-width: 768px) {
    margin: 0;
    padding: 10px;
    // height: 100vh;


    .first-card,
    .second-card,
    .third-card {
      max-width: 100%;
      height: auto;
      margin: 10px;
    }

  }
`;

export const FlexCon = styled.div`
  display: flex;
  padding: 20px 60px;
  flex-direction: row;
  margin: 0 10px;


  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0;
    margin: 10px 0;
  }
`;
