import styled from 'react-emotion'

export const Wrapper = styled('img')`
  font-family: 'object-fit: ${props =>
    props.options.fit}; object-position: ${props => props.options.position}';
  object-fit: ${props => props.options.fit};
  object-position: ${props => props.options.position};

  ${props => props.options.styles};
`
