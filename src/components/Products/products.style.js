import styled from "styled-components";

export const Container = styled.div`
  .grid-area {
    padding: 40px 40px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    gap: 30px;
  }
`;
