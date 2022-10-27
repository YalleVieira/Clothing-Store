import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  color: black;

  .details-product {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 20px;
  }

  .icon-bag {
    cursor: pointer;
    font-size: 30px;

    &:hover {
      color: #3cb371;
    }
  }

  .img-product {
    border: 2px solid black;
    box-shadow: 5px 10px black;
    border-radius: 5px;
    width: 100%;
    height: 320px;
    object-fit: cover;
  }
`;
