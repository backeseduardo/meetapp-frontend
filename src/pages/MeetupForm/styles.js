import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding-top: 20px;
  h1 {
    color: #fff;
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;

    input,
    textarea {
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

    .react-datepicker-wrapper {
      .react-datepicker__input-container {
        display: flex;

        input {
          flex-grow: 1;
        }
      }
    }

    > span {
      color: #f94d6a;
      margin: 0 0 10px;
    }

    label[for='banner'] {
      cursor: pointer;
      height: 200px;
      width: 100%;
      margin-bottom: 10px;
      background: rgba(0, 0, 0, 0.3);
      border-radius: 4px;

      display: flex;

      &:hover {
        opacity: 0.7;
      }

      > span {
        color: rgba(255, 255, 255, 0.7);
        font-size: 20px;
        flex-grow: 1;
        align-self: center;
        text-align: center;
      }

      img {
        height: 100%;
        width: 100%;
        border-radius: 4px;
        object-fit: cover;
      }

      input {
        display: none;
      }
    }

    > button {
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
