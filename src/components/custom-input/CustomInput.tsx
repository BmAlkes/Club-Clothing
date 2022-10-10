import { FunctionComponent, InputHTMLAttributes } from 'react'
import { CustomInputContainer } from './custom-input'

interface CustomInput extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean
}

const CustomInput: FunctionComponent<CustomInput> = ({ hasError, ...rest }) => {
  return <CustomInputContainer hasError={hasError} {...rest} />
}

export default CustomInput
