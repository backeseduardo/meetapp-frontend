import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  header {
    margin: 20px 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      color: #fff;
      font-size: 32px;
      font-weight: bold;
    }

    button {
      color: #fff;
      font-size: 16px;
      font-weight: bold;
      background: #f94d6a;
      border: 0;
      border-radius: 4px;
      padding: 15px 20px;

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

export const Meetup = styled.li`
  background: rgba(0, 0, 0, 0.2);
  border-radius: 4px;

  a {
    padding: 20px 30px;
    margin-bottom: 10px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      color: #fff;
      font-size: 18px;
      font-weight: bold;
    }

    aside {
      display: flex;
      align-items: center;

      span {
        color: #fff;
        font-size: 16px;
        opacity: 0.7;
        margin-right: 20px;
      }
    }
  }
`;
