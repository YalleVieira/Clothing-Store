import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 20px;
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
    font-size: 40px;
    font-family: "Roboto", sans-serif;
  }

  .content-details p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    font-size: 14px;
  }

  .content-img {
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
      width: 40%;
      position: absolute;
      z-index: 1;
    }
  }

  .btn {
    cursor: pointer;
    border-radius: 20px;
    padding: 1em 2em;
    border: none;
    z-index: 2;
    font-weight: bold;
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
    top: 15%;
    left: 25%;

    &:hover {
      background-color: black;
      color: white;
      box-shadow: 5px 5px white;
    }
  }
`;
