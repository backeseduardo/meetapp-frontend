import styled from 'styled-components';

export const Label = styled.label`
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
  }

  input {
    display: none;
  }
`;
