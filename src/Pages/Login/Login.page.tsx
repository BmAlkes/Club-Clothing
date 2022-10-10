import React from 'react'
import Header from '../../components/header/header'
import CustomButton from '../../components/custom-buttton/CustomButton'
import { BsGoogle } from 'react-icons/bs'
import {
  LoginContainer,
  LoginHeadline,
  LoginContent,
  LoginInputContainer,
  LoginSubtitle
} from './Login.styles'

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
          <LoginInputContainer>{/*Email Input*/}</LoginInputContainer>
          <LoginInputContainer>{/*password Input*/}</LoginInputContainer>
        </LoginContent>
      </LoginContainer>
    </>
  )
}

export default Login
