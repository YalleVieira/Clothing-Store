import styled from "styled-components";

export const Container = styled.div`
  padding: 40px 30px 20px 30px;
  display: flex;
  align-items: center;
  gap: 20px;

  .collection-details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    gap: 20px;
  }

  .content-title h3 {
    text-align: left;
  }

  .btn-shop {
    background-color: #3cb371;
    border: 2px solid black;
    box-shadow: 5px 5px #3cb371;

    &:hover {
      background-color: white;
      color: black;
    }
  }

  img {
    width: 50%;
  }
`;
