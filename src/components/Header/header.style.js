import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 100%;

  .navbar {
    display: flex;
    gap: 10px;
  }

  a {
    font-size: 14px;
    text-decoration: none;
    color: black;
  }

  a:hover {
    color: #3cb371;
  }

  h1 {
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    font-size: 35px;
    color: black;
  }

  p {
    color: #707070;
    font-weight: 300;
  }

  .navbar-menu {
    display: flex;
    gap: 30px;
  }

  .login {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .login a {
    text-decoration: none;
    color: #707070;

    &:hover {
      color: #939393;
    }
  }

  .icon-bag {
    cursor: pointer;

    &:hover {
      color: #3cb371;
    }
  }

  @media (max-width: 768px) {
    .navbar {
      display: none;
    }
  }
`;

export const Button = styled.button`
  background-color: #2c42fa;
  border: none;
  padding: 1em 1.1em;
  border-radius: 50%;
  color: white;
  font-size: 20px;
`;
