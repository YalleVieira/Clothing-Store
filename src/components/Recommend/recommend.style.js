import styled from "styled-components";

export const Container = styled.div`
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  .grid-area {
    padding: 0 30px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    gap: 20px;
  }

  h3 {
    font-family: "Roboto", sans-serif;
    font-size: 30px;
    text-align: center;
    font-weight: bolder;
  }
`;
