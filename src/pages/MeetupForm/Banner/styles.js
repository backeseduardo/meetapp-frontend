import styled from 'styled-components';

export const Container = styled.label`
  align-self: stretch;
  margin-bottom: 10px;

  label {
    cursor: pointer;
    height: 200px;
    width: 100%;
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
