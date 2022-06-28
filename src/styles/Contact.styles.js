import styled from 'styled-components';

export const ContactWrapper = styled.div`
  margin: 20px 20px;
  padding: 20px;
  color: #000;


  h2 {
    margin-bottom: 10px;
    text-align: center;
    font-family: 'Lato', sans-serif;
  }


  iframe {
    border: none;
  }


  label {
    font-size: 14px;
    display: block;
    text-align: left;
  }


  input,
  textarea {
    width: 100%;
  }


  .first-part,
  .second-part {
    margin: 10px 0;
  }


  .red {
    color: #ff0000;
  }


  .row {
    display: flex;
    flex-direction: row;
  }


  .col-50,
  .half-form {
    width: 50%;
  }


  .col-50,
  .full-form,
  .half-form,
  .form-btn {
    padding: 10px;
  }


  .form-btn {
    margin: 10px;
    border-radius: 5px;
    background: #3148b8;
    color: #fff;
    padding: 10px 20px;
    text-align: center;
    border: none;
    cursor: pointer;

    &:hover {
      background: #5268d1;
    }

    &:focus {
      outline: none;
    }
  }


  .info-box {
    color: #222222;
    box-shadow: 0 0 30px rgba(214, 215, 216, 0.6);
    padding: 20px 0 30px 0;
    background: #fff;
    text-align: center;


    i {
      font-size: 20px;
      color: #242946;
      border-radius: 50%;
      padding: 8px;
      border: 2px dotted #ffd700;
    }


    h3 {
      font-size: 16px;
      color: #777777;
      font-weight: 700;
      margin: 15px 10px 0;
    }


    a {
      text-decoration: none;
      cursor: pointer;
      color: #222222;
    }


    p {
      padding: 0;
      line-height: 24px;
      font-size: 14px;
      margin-bottom: 0;
    }

  }


  @media (max-width: 768px) {
    margin: 20px 10px;
    padding: 8px;
    /* height: 100vh; */


    .row {
      flex-direction: column;
    }


    .col-50,
    .half-form {
      width: 100%;
    }


    .info-box {
        padding-left: 5px;
    }

  }
`;
