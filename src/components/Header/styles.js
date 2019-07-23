import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.2);
`;

export const Content = styled.div`
  height: 80px;
  max-width: 900px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;

    button {
      color: #fff;
      background: none;
      border: 0;
      font-size: 20px;
      text-decoration: none;
      opacity: 0.7;
      margin-left: 20px;

      display: flex;
      align-items: center;

      svg {
        margin-right: 5px;
      }
    }

    button:hover {
      opacity: 0.9;
    }
  }

  aside {
    display: flex;
    align-items: center;

    button {
      background: #d44059;
      border: 0;
      border-radius: 4px;
      color: #fff;
      font-size: 16px;
      font-weight: bold;
      padding: 12px 20px;
      margin-left: 30px;

      &:hover {
        background: ${darken(0.03, '#d44059')};
      }

      &:active {
        background: ${darken(0.05, '#d44059')};
      }
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  strong {
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  a {
    color: #999999;
    font-size: 14px;
    font-weight: normal;
  }
`;
