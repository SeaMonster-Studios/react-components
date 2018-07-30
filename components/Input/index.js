// TODO: Add flow declaration once figuring out whey it thinks the button props should by on both tInputs union types
import * as React from 'react'
//
import { readUploadedFileAsText } from '../../utils/io'
import { Wrapper } from './style'
import { Button } from '../Button'
import type { tButton } from '../Button'

export type tValue = number | string | null

export type tEvent = SyntheticEvent<HTMLInputElement>

export type tInputCommon = {
  valueHasChanged?: (value: tValue | any, fileContents?: string) => any,
  onChange?: any => any,
  value?: tValue,
}

export type tInput = tInputCommon &
  (
    | {
        type:
          | 'color'
          | 'date'
          | 'datetime'
          | 'datetime-local'
          | 'email'
          | 'hidden'
          | 'month'
          | 'number'
          | 'password'
          | 'range'
          | 'search'
          | 'tel'
          | 'text'
          | 'time'
          | 'url'
          | 'week',
      }
    | (tButton & {
        // children: ({ Input: React.Node }) => React.Node,
        type: 'button' | 'submit' | 'file',
      })
  )

export type tInputState = {
  value: tValue,
}

export class Input extends React.Component<tInput, tInputState> {
  state = {
    value: '',
  }
  inputRef = React.createRef()
  handleChange = async (event: tEvent) => {
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
  handleFileChange = async (event: tEvent) => {
    event.persist()
    if (
      event.currentTarget instanceof HTMLInputElement &&
      event.currentTarget.files.length
    ) {
      try {
        const fileContents: string = await readUploadedFileAsText(
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
    const { type, value, onChange, valueHasChanged, ...props } = this.props

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
        // const { children, ...attrs } = props
        // const { baseColor, textColor, ...attrs } = props
        return (
          <Button
            baseColor={props.baseColor}
            textColor={props.textColor}
            {...props}
            tagType="button"
          >
            <Wrapper {...innerProps} />
            {/* TODO: Need to provide the user with the input component instead of just nesting it, incase they want to put something else in the button (like an icon) */}
            {/* {children({ Input: <Wrapper {...innerProps} /> })} */}
          </Button>
        )
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
