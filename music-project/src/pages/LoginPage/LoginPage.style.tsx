import styled from "styled-components";

export const SLoginPage = styled.div`
  /* padding: 100px 0 0 0;
    background-color: ${(props) => props.theme.colors.black};
    color: white;
    margin: 0 auto;
    width: 100%;
    height: 1000px;
    text-align: center;

    h1 {
        font-size: 40px;
        margin-bottom: 10px;
    }

    .links {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 15px;
    }
     
    .link {
        display: block;
        color: white;
        text-decoration: none;
        font-size: 16px;
        padding: 7px 12px 5px 16px;
        width: 370px;
    }

    .facebook {
        background-color: lightblue;

    } */

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #000;
  color: #fff;

  h1 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  .links {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    max-width: 300px;

    .link {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
      border-radius: 4px;
      color: #fff;
      text-decoration: none;
      cursor: pointer;

      &.facebook {
        background-color: #3b5998;
      }
      &.twitter {
        background-color: #1da1f2;
      }
      &.google {
        background-color: #db4437;
      }
    }
  }

  form {
    background-color: #121212;
    padding: 20px;
    border-radius: 4px;
    width: 100%;
    max-width: 300px;
    margin-top: 20px;

    label {
      display: block;
      margin-bottom: 10px;
      font-size: 0.9rem;
    }

    input {
      width: 100%;
      padding: 8px;
      background-color: #333;
      border: 1px solid #444;
      border-radius: 4px;
      color: #fff;
    }

    button {
      width: 100%;
      margin-top: 15px;
      padding: 10px;
      background-color: #444;
      border: none;
      border-radius: 4px;
      color: #fff;
      cursor: pointer;
      transition: background 0.3s;

      &:hover {
        background-color: #555;
      }
    }
  }

  p {
    margin-top: 20px;
    font-size: 0.9rem;

    a {
      color: #1da1f2;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
