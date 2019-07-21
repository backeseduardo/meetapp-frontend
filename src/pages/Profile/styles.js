import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding-top: 20px;

  form {
    display: flex;
    flex-direction: column;

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }

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
      margin: 0 0 10px;
    }

    button {
      color: #fff;
      font-size: 16px;
      font-weight: bold;
      background: #f94d6a;
      border: 0;
      border-radius: 4px;
      padding: 15px 20px;
      margin-left: auto;

      display: flex;
      align-items: center;

      &:hover {
        background: ${darken(0.03, '#f94d6a')};
      }

      &:active {
        background: ${darken(0.05, '#f94d6a')};
      }

      svg {
        margin-right: 5px;
      }
    }
  }
`;
