import styled from "styled-components";

export const Container = styled.div`
  background-color: tomato;
  padding: 90px 30px 15px 30px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid black;
  border-bottom: 3px solid black;

  a {
    text-decoration: none;
    color: white;
    font-weight: bold;

    &:hover {
      color: black;
    }
  }
`;
