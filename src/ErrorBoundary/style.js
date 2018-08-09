import styled from 'react-emotion'

export const Wrapper = styled('div')`
  background-color: #f8ebe6;
  box-shadow: inset 0 0 0 0 transparent, 0 0 0 1px rgba(63, 63, 68, 0.05),
    0 1px 3px 0 rgba(63, 63, 68, 0.15);
  position: absolute;
  border-top: 2px solid rgb(222, 54, 24);
  top: 50%;

  width: calc(100% - 40px);
  margin: 0 20px;
  padding: 20px;
  text-align: center;
  line-height: 1.5;

  &,
  button {
    font-size: 1rem;
    font-weight: 300;
  }

  h2 {
    font-size: 1.625rem;
    padding-bottom: 10;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    padding: 0;
    border-bottom: 1px solid rgb(222, 54, 24);
  }
`
