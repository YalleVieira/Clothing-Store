import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  font-weight: bold;

  .container-img img {
    border: 2px solid black;
    box-shadow: 5px 10px black;
    border-radius: 5px;
    width: 100%;
    object-fit: cover;
  }
`;
