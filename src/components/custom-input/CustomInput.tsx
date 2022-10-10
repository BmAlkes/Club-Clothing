import React, { FunctionComponent, InputHTMLAttributes } from 'react'
import { CustomInputContainer } from './custom-input'

interface CustomInput extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean
}

const CustomInput: FunctionComponent<CustomInput> = React.forwardRef(
  (props, ref) => {
    return <CustomInputContainer {...props} ref={ref as any} />
  }
)

export default CustomInput
