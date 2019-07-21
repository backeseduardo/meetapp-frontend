import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(180deg, #22202c, #402845);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.3);
      font-size: 18px;
      color: #fff;
      border: 0;
      padding: 15px 20px;
      border-radius: 4px;
      margin-bottom: 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #f94d6a;
      margin-bottom: 10px;
      align-self: flex-start;
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
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
