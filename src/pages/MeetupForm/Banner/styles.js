import styled from 'styled-components';

export const Container = styled.label`
  align-self: stretch;

  label {
    cursor: pointer;
    height: 200px;
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    position: relative;

    display: flex;

    &:hover {
      div.bannerhover {
        background: rgba(0, 0, 0, 0.3);

        svg {
          display: block;
        }
      }
    }

    div.bannerhover {
      position: absolute;
      width: 100%;
      height: 100%;

      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        display: none;
      }
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
    }

    input {
      display: none;
    }
  }

  > span {
    color: #f94d6a;
    margin: 10px 0;
  }
`;
