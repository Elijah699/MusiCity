import styled from 'styled-components';

export const AboutWrapper = styled.div`
  margin: 20px 20px;
  padding: 20px;
  color: #000;


  h2 {
      margin-bottom: 10px;
      text-align: center;
      font-family: 'Lato', sans-serif;
  }


  p {
      line-height: 1.5;
      font-size: 14px;
  }


  @media (max-width: 768px) {
    margin: 20px 10px;
    padding: 10px;
    // height: 100vh;


    p {
      margin: 15px 0;
    }

  }
`;