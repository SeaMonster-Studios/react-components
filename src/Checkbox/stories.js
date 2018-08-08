import React from 'react'
import { storiesOf } from '@storybook/react'
import { css } from 'react-emotion'
//
import { Checkbox } from './'
import { CheckIcon, CloseIcon } from '../Icons'
import { Center } from '../../styles/stories'

const common = {
  size: 30,
  checkedHasChanged: (checked: boolean) =>
    console.log('New checked value: ', checked),
}

storiesOf('Checkbox', module)
  .add('internally controlled state', () => (
    <Center>
      <Checkbox {...common} />
    </Center>
  ))
  .add('user controlled state', () => <UserControlledState />)
  .add('with on and off icons', () => (
    <Center>
      <Checkbox
        {...common}
        OnIcon={CheckIcon}
        OffIcon={CloseIcon}
        styles={css`
          svg {
            width: 30px;
            height: 30px;
          }
        `}
      />{' '}
    </Center>
  ))
  .add('with custom styles and on and off icons', () => (
    <Center>
      <Checkbox
        OnIcon={CheckIcon}
        OffIcon={CloseIcon}
        size={50}
        styles={css`
          border-color: rebeccapurple;
          border-width: 5px;

          .input-wrapper {
            margin-top: -10px;
          }

          svg {
            width: 40px;
            height: 40px;
            fill: tomato;
          }
        `}
        activeStyles={css`
          border-color: red;
        `}
      />{' '}
    </Center>
  ))

class UserControlledState extends React.Component {
  state = {
    checked: false,
  }
  handleChange = () => {
    this.setState(prevState => ({ checked: !prevState.checked }))
  }
  render() {
    return (
      <Center>
        <Checkbox
          {...common}
          onChange={this.handleChange}
          checked={this.state.checked}
        />
      </Center>
    )
  }
}
