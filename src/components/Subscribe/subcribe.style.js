import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  .form-subscribe {
    display: flex;
    gap: 20px;
  }

  .form-subscribe input {
    border: none;
    background-color: transparent;
    border: 2px dashed black;
    outline: none;
    border-radius: 15px;
    padding: 0.5em 5em 0.5em 1em;
  }

  .btn-subscribe {
    padding: 0.7em 2em;
    background-color: #ffa500;
    box-shadow: 5px 5px #ffa500;
    border: 2px solid black;
    transition: ease 0.8s;

    &:hover {
      background-color: black;
      color: white;
      box-shadow: 5px 5px black;
      border: 2px solid white;
    }
  }

  .social-media {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .social-media img {
    width: 70px;
    object-fit: contain;
  }
`;
