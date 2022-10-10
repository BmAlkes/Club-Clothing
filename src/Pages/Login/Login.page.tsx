import React from 'react'
import Header from '../../components/header/header'
import CustomButton from '../../components/custom-buttton/CustomButton'
import { BsGoogle } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'
import {
  LoginContainer,
  LoginHeadline,
  LoginContent,
  LoginInputContainer,
  LoginSubtitle
} from './Login.styles'
import CustomInput from '../../components/custom-input/CustomInput'

const Login = () => {
  return (
    <>
      <Header />

      <LoginContainer>
        <LoginContent>
          <LoginHeadline>Login with your account</LoginHeadline>
          <CustomButton startIcon={<BsGoogle size={18} />}>
            Login with Google
          </CustomButton>
          <LoginSubtitle>or enter with your email:</LoginSubtitle>
          <LoginInputContainer>
            <CustomInput placeholder="Enter your email" />
          </LoginInputContainer>
          <LoginInputContainer>
            <CustomInput placeholder="Enter your password" />
          </LoginInputContainer>
          <CustomButton startIcon={<FiLogIn size={18} />}>Enter</CustomButton>
        </LoginContent>
      </LoginContainer>
    </>
  )
}

export default Login
