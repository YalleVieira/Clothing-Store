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
      width: 70%;
    }
  }
`;
