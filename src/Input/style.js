import styled from 'react-emotion'

export const Wrapper = styled('span')`
  position: relative;
  display: inline-block;

  input {
    font-size: 0;
    display: inline-block;
    cursor: pointer;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    width: 100%;
    opacity: 0;

    &:focus {
      outline: none;
    }
  }

  > span {
    position: relative;
    z-index: 1;
    display: inline-block;
  }
`
