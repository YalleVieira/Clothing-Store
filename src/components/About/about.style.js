import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  /* padding: 10px 20px; */
  height: 100vh;

  .content-details {
    padding: 20px;
    width: 50%;
    background-color: #3cb371;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    border-right: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }

  .content-details h1 {
    font-size: 45px;
    font-family: "Roboto", sans-serif;
  }

  .content-img {
    overflow: hidden;
    padding: 10px;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ffa500;
    border-top: 1px solid black;
    border-bottom: 1px solid black;

    img {
      width: 90%;
      z-index: 1;
    }
  }

  .btn-shop {
    width: fit-content;
    background-color: black;
    color: white;
    box-shadow: 5px 5px #ffa500;

    &:hover {
      background-color: white;
      color: black;
    }
  }

  .btn-printed {
    border: 2px solid black;
    box-shadow: 5px 5px black;
    position: relative;
    top: -30%;
    left: 25%;

    &:hover {
      background-color: black;
      color: white;
      box-shadow: 5px 5px white;
    }

    @media (max-width: 768px) {
      top: 0%;
      left: 15%;
    }
  }
`;
