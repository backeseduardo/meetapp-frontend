import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding-top: 20px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      h1 {
        color: #fff;
        font-size: 32px;
        font-weight: bold;
      }

      a {
        color: #fff;
        font-size: 16px;
        text-decoration: none;
        opacity: 0.7;

        display: flex;
        align-items: center;

        svg {
          margin-right: 5px;
        }
      }

      a:hover {
        opacity: 0.9;
      }
    }

    aside {
      display: flex;

      button.edit {
        color: #fff;
        font-size: 16px;
        font-weight: bold;
        background: #4dbaf9;
        border: 0;
        border-radius: 4px;
        padding: 15px 20px;

        display: flex;
        align-items: center;

        &:hover {
          background: ${darken(0.03, '#4DBAF9')};
        }

        &:active {
          background: ${darken(0.05, '#4DBAF9')};
        }

        svg {
          margin-right: 5px;
        }
      }

      button.cancel {
        color: #fff;
        font-size: 16px;
        font-weight: bold;
        background: #d44059;
        border: 0;
        border-radius: 4px;
        padding: 15px 20px;
        margin-left: 15px;

        display: flex;
        align-items: center;

        &:hover {
          background: ${darken(0.03, '#D44059')};
        }

        &:active {
          background: ${darken(0.05, '#D44059')};
        }

        svg {
          margin-right: 5px;
        }
      }
    }
  }
`;

export const Content = styled.div`
  margin-top: 20px;

  display: flex;
  flex-direction: column;

  img {
    height: 300px;
    border-radius: 4px;
    border: 3px solid #d44059;
  }

  p {
    margin-top: 25px;
    color: #fff;
    font-size: 18px;
  }

  footer {
    margin-top: 30px;

    display: flex;
    align-items: center;

    span {
      color: rgba(255, 255, 255, 0.7);
      font-size: 16px;
    }

    span:first-child {
      margin-right: 50px;
    }
  }
`;
