import { FunctionComponent, ButtonHTMLAttributes } from 'react'
import { CustomButtonContainer, IconContainer } from './customButton.styles'

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  startIcon?: React.ReactNode
}
const CustomButton: FunctionComponent<CustomButtonProps> = ({
  children,
  startIcon,
  ...rest
}) => {
  return (
    <CustomButtonContainer {...rest}>
      {startIcon && <IconContainer>{startIcon}</IconContainer>}
      {children}
    </CustomButtonContainer>
  )
}

export default CustomButton
