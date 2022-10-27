import styled from "styled-components";
import backgroundLeaf from "../../assets/img/leaf-footer.png";

export const Container = styled.div`
  width: 100%;
  display: flex;
  position: static;
  bottom: 0;

  .footer {
    width: 50%;
    background-color: #ffa500;
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    border-top: 2px solid black;
    border-bottom: 2px solid black;

    .content-adress {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    p {
      font-size: 14px;
    }
  }

  .footer-nav {
  }
`;

export const FooterNav = styled.div`
  width: 50%;
  background-image: url(${backgroundLeaf});
  background-position: top right;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 20px;
  gap: 10px;
  border-top: 2px solid black;
  border-bottom: 2px solid black;

  a {
    color: white;
    text-decoration: none;
    font-weight: normal;
    font-size: 14px;

    &:hover {
      color: #3cb371;
    }
  }
`;
