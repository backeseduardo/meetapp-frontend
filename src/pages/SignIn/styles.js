import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  form {
    width: 350px;

    display: flex;
    flex-direction: column;

    img {
      width: 42px;
      height: 42px;
      margin: 0 auto 50px;
    }

    input {
      background: rgba(0, 0, 0, 0.3);
      font-size: 18px;
      color: #fff;
      border: 0;
      padding: 15px 20px;
      border-radius: 4px;
      margin-bottom: 10px;
    }

    button {
      background: #f94d6a;
      font-size: 18px;
      font-weight: bold;
      color: #fff;
      border: 0;
      padding: 15px 20px;
      border-radius: 4px;
      margin-bottom: 10px;
      transition: background 0.3s;

      &:hover {
        background: ${darken(0.03, '#f94d6a')};
      }

      &:active {
        background: ${darken(0.06, '#f94d6a')};
      }
    }

    > a {
      font-size: 16px;
      font-weight: bold;
      color: #fff;
      align-self: center;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
