import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  margin-top: 20px;

  header {
    margin-bottom: 20px;

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
      background: #d44059;
      border: 0;
      border-radius: 4px;
      padding: 15px 20px;

      display: flex;
      align-items: center;

      &:hover {
        background: ${darken(0.03, '#d44059')};
      }

      &:active {
        background: ${darken(0.05, '#d44059')};
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
      opacity: ${props => (props.past ? 0.5 : 1)};
    }

    aside {
      display: flex;
      align-items: center;

      div {
        display: flex;
        flex-direction: column;

        span {
          margin-top: 5px;

          display: flex;
          align-items: center;

          svg {
            margin-right: 5px;
          }
        }

        span:first-child {
          margin-top: 0;
        }
      }

      span {
        color: #fff;
        font-size: 16px;
        opacity: ${props => (props.past ? 0.5 : 0.7)};
        margin-right: 20px;
      }

      svg {
        opacity: ${props => (props.past ? 0.5 : 1)};
      }
    }
  }
`;
