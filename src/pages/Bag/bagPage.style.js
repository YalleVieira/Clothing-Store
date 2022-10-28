import styled from "styled-components";

export const Container = styled.div`
  .grid-area {
    padding: 40px 40px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    gap: 30px;
  }

  #content-empty {
    text-align: center;
    padding-top: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    flex-direction: column;

    p {
      font-size: 16px;
      font-weight: bold;
    }

    .btn-back {
      border: 2px solid black;
      background-color: #3cb371;
      box-shadow: 5px 5px black;
      transition: ease 0.5s;

      &:hover {
        background-color: white;
      }
    }
  }

  .bag-empty {
    color: #3cb371;
  }
`;
