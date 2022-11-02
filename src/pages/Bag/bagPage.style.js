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

  .header-bag {
    padding-left: 20px;
    padding-top: 100px;
  }

  .content-product {
    padding: 100px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    text-align: center;
  }

  .total-products {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .card-product {
    display: flex;
    border-radius: 10px;
    overflow: hidden;
    gap: 20px;
    align-items: center;
    width: 350px;
    box-shadow: 15px 5px 10px #ccc;

    img {
      width: 100px;
      height: 100px;
    }
  }

  .bag-empty {
    color: #3cb371;
  }
`;
