import styled from "styled-components";

export const Container = styled.div`
  .product-bag {
    width: 240px;
    height: 80px;
    z-index: 3;
    display: flex;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 5px 5px 5px #ccc;

    img {
      width: 100px;
      object-fit: cover;
    }

    .details-product {
      font-size: 12px;
      display: flex;
      justify-content: space-between;
      gap: 10px;
      align-items: center;
      padding: 10px;

      p {
        font-size: 12px;
      }
    }
  }

  .modal-content {
    min-height: 200px;
    min-width: 200px;
    position: absolute;
    top: 5px;
    right: 5px;
    background: white;
    z-index: 3;
    border-radius: 15px;
    border: 2px solid black;
    box-shadow: 5px 10px black;
    overflow: hidden;
    padding: 15px;

    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    color: black;

    .qtd-items {
      font-size: 18px;
      color: black;
    }
  }

  .bag-empty {
    color: #3cb371;
  }

  .footer-modal {
    .total {
      font-weight: bold;
    }

    a {
      text-decoration: underline;
    }

    display: flex;
    gap: 20px;
  }
`;
