import styled from 'react-emotion'

export const Wrapper = styled('nav')(props => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  width: '100%',
  zIndex: 999,

  '.lvl1-wrapper': {
    display: 'flex',
    alignItems: 'center',
    lineHeight: 1,

    '> a, > button': {
      fontSize: 16,
      padding: `${props.ySpacing}px ${props.xSpacing}px`,
      display: 'flex',
      alignItems: 'center',

      '&, &:hover, &:focus': {
        textDecoration: 'none',
      },
    },

    'a.item-has-children': {
      paddingRight: 0,

      '+ button': {},
    },
  },

  button: {
    border: 'none',
    cursor: 'pointer',
    background: 'rgba(0,0,0,0)',

    '&.button-has-icon': {
      padding: 0,
      display: 'flex',
      alignItems: 'center',

      '> span': {
        padding: `${props.xSpacing}px 0 ${props.xSpacing}px ${
          props.xSpacing
        }px`,
        lineHeight: 1.05,
      },

      svg: {
        // marginLeft: props.xSpacing,
        margin: `${props.xSpacing}px`,
      },
    },

    '&:focus': {
      outline: 'none',
    },
  },

  '.subitem': {
    position: 'absolute',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    width: 'calc(100% - 60px)',
    bottom: 0,
    transform: 'translateY(100%)',
    left: 0,
    right: 0,
    margin: 'auto',
    padding: `${props.ySpacing}px ${props.ySpacing * 2}px 0`,
  },

  '.subitem-inner': {
    display: 'flex',
    flexWrap: 'wrap',
  },

  '.subitem-section': {
    display: 'flex',
    flexDirection: 'column',
    padding: `0 ${props.xSpacing}px ${props.ySpacing}px`,
    textAlign: 'left',

    ul: {
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      fontSize: 16,

      a: {
        '&, &:hover, &:focus': {
          textDecoration: 'none',
        },
      },
    },
  },

  '.section-title': {
    fontSize: 18,
    marginBottom: props.ySpacing,

    '&, &:active, &:hover': {
      textDecoration: 'none',
    },
  },
}))
