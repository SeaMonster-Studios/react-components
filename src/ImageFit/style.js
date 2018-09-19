import styled from "react-emotion"

export const Wrapper = styled("img")`
  font-family: 'object-fit: ${(props) => props.fit}; object-position: ${(
  props,
) => props.position}';
  object-fit: ${(props) => props.fit};
  object-position: ${(props) => props.position};
`
