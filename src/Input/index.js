import * as React from 'react'
import PropTypes from 'prop-types'
//
import { readUploadedFileAsText } from '../../utils/io'
import { Wrapper } from './style'

export class Input extends React.Component {
  static propTypes = {
    type: PropTypes.oneOf([
      'color',
      'date',
      'datetime',
      'datetime-local',
      'email',
      'hidden',
      'month',
      'number',
      'password',
      'range',
      'search',
      'tel',
      'text',
      'time',
      'url',
      'week',
      'button',
      'submit',
      'file',
    ]).isRequired,
    valueHasChanged: PropTypes.func,
    onChange: PropTypes.func,
    children: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }
  state = {
    value: '',
  }
  inputRef = React.createRef()
  handleChange = async event => {
    event.persist()
    if (event.currentTarget instanceof HTMLInputElement) {
      this.setState({ value: event.currentTarget.value })

      if (
        event.currentTarget instanceof HTMLInputElement &&
        this.props.valueHasChanged
      ) {
        this.props.valueHasChanged(event.currentTarget.value)
      }
    }
  }
  handleFileChange = async event => {
    event.persist()
    if (
      event.currentTarget instanceof HTMLInputElement &&
      event.currentTarget.files.length
    ) {
      try {
        const fileContents = await readUploadedFileAsText(
          event.currentTarget.files[0],
        )
        if (this.props.valueHasChanged) {
          this.props.valueHasChanged(event.currentTarget, fileContents)
        } else {
          console.error(
            'You must provide an valueHasChanged to retrieve file info for inputs with a type of `file`',
          )
        }
      } catch (e) {
        console.error(e.message)
      }
    }
  }
  render() {
    const {
      type,
      value,
      onChange,
      valueHasChanged,
      children,
      ...props
    } = this.props

    const innerProps = {
      'data-testid': 'component-input',
      type,
      value: value || this.state.value,
      ref: this.inputRef,
      onChange:
        type === 'file' ? this.handleFileChange : onChange || this.handleChange,
    }

    switch (type) {
      case 'file':
      case 'button':
      case 'submit':
        if (children) {
          return children({ Component: Wrapper, props: innerProps })
        }
        return <Wrapper {...innerProps} />
      default:
        return (
          <Wrapper
            {...{
              ...innerProps,
              ...props,
            }}
          />
        )
    }
  }
}
