import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 40px 30px;

  .container-talking {
    height: 260px;
    background-color: skyblue;
    border-radius: 15px;
    box-shadow: 5px 5px black;
    border: 2px solid black;
    padding: 30px;
  }

  .content-talking {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  .talking-slogan {
    padding-top: 10px;
    max-width: 350px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    text-align: center;
    font-weight: bold;
  }

  #title {
    position: relative;
    top: -50px;
  }
`;
