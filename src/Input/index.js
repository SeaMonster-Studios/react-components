import * as React from "react"
import PropTypes from "prop-types"
//
import { readUploadedFileAsText } from "../../utils/io"
import { Wrapper } from "./style"

export class Input extends React.Component {
  static propTypes = {
    /** 'color',
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
      'file'
     */
    type: PropTypes.oneOf([
      "color",
      "date",
      "datetime",
      "datetime-local",
      "email",
      "hidden",
      "month",
      "number",
      "password",
      "range",
      "search",
      "tel",
      "text",
      "time",
      "url",
      "week",
      "button",
      "submit",
      "file",
    ]),
    /** It's provided the new value each time it changes */
    valueHasChanged: PropTypes.func,
    /** Used for User/non-component controlled state */
    onChange: PropTypes.func,
    /** Required for and wsed with types of 'file', 'button', and 'submit' */
    children: PropTypes.func,
    /** Used for User/non-component controlled state */
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    className: PropTypes.string,
    style: PropTypes.object,
    /** Used with type of 'file' */
    label: PropTypes.string,
  }
  static defaultProps = {
    type: "text",
    style: {},
    label: "Upload",
    className: "",
  }
  state = {
    value: "",
  }
  handleChange = async (event) => {
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
  handleFileChange = async (event) => {
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
            "You must provide an valueHasChanged to retrieve file info for inputs with a type of `file`",
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
      label,
      className,
      style,
    } = this.props

    const outerProps = {
      className,
      style,
    }

    const innerProps = {
      "data-testid": "component-input",
      type,
      value: value || this.state.value,
      onChange:
        type === "file" ? this.handleFileChange : onChange || this.handleChange,
    }

    switch (type) {
      case "file":
      case "button":
      case "submit":
        if (children) {
          return children({
            input: (
              <Wrapper data-testid="component-input-wrapper">
                <input {...innerProps} />
                <span
                  data-testid="component-input-label"
                  className={className}
                  style={style}
                >
                  {label}
                </span>
              </Wrapper>
            ),
          })
        }
        return null
      default:
        return (
          <input
            {...{
              ...innerProps,
              ...outerProps,
            }}
          />
        )
    }
  }
}
