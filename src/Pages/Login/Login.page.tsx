import Header from '../../components/header/header'
import CustomButton from '../../components/custom-buttton/CustomButton'
import { BsGoogle } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'
import { useForm } from 'react-hook-form'
import validator from 'validator'
import {
  LoginContainer,
  LoginHeadline,
  LoginContent,
  LoginInputContainer,
  LoginSubtitle
} from './Login.styles'
import CustomInput from '../../components/custom-input/CustomInput'
import InputErrorMessage from '../../components/input-error-component/InputError'
import {
  AuthError,
  AuthErrorCodes,
  signInWithEmailAndPassword,
  signInWithPopup
} from 'firebase/auth'
import { auth, googleProvider, db } from '../../config/firebase.config'
import { getDocs, collection, query, where, addDoc } from 'firebase/firestore'
import { useEffect, useContext } from 'react'
import { UserContext } from '../../contexts/userContext'
import { useNavigate } from 'react-router-dom'

interface LoginForm {
  email: string
  password: string
}

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError
  } = useForm<LoginForm>()

  const { isAutheticated } = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (isAutheticated) {
      navigate('/')
    }
  }, [isAutheticated])

  const handleSubmitPress = async (data: LoginForm) => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )
      console.log(userCredentials)
    } catch (error) {
      const errors = error as AuthError

      if (errors.code === AuthErrorCodes.INVALID_PASSWORD) {
        return setError('password', { type: 'mismatch' })
      }
      if (errors.code === AuthErrorCodes.USER_DELETED) {
        return setError('email', { type: 'notFound' })
      }
    }
  }

  const handleSignInWithGooglePress = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider)

      const querySnapshot = await getDocs(
        query(
          collection(db, 'users'),
          where('id', '==', userCredential.user.uid)
        )
      )
      const user = querySnapshot.docs[0]?.data
      if (!user) {
        const firstName = userCredential.user.displayName?.split(' ')[0]
        const lastName = userCredential.user.displayName?.split(' ')[1]

        await addDoc(collection(db, 'users'), {
          id: userCredential.user.uid,
          email: userCredential.user.email,
          firstName,
          lastName,
          provider: 'google'
        })
      }
      console.log({ user })
    } catch (err) {
      console.log({ err })
    }
  }
  return (
    <>
      <Header />

      <LoginContainer>
        <LoginContent>
          <LoginHeadline>Login with your account</LoginHeadline>
          <CustomButton
            startIcon={<BsGoogle size={18} />}
            onClick={handleSignInWithGooglePress}>
            Login with Google
          </CustomButton>
          <LoginSubtitle>or enter with your email:</LoginSubtitle>
          <LoginInputContainer>
            <p>Email</p>
            <CustomInput
              hasError={!!errors?.email}
              placeholder="Enter your email"
              {...register('email', {
                required: true,
                validate: (value) => {
                  return validator.isEmail(value)
                }
              })}
            />
            {errors?.email?.type === 'validate' && (
              <InputErrorMessage>
                Please insert a validate email
              </InputErrorMessage>
            )}
            {errors?.email?.type === 'notFound' && (
              <InputErrorMessage>Email notFound</InputErrorMessage>
            )}
          </LoginInputContainer>
          <LoginInputContainer>
            <p>Password</p>
            <CustomInput
              hasError={!!errors?.password}
              placeholder="Enter your password"
              type="password"
              {...register('password', { required: true })}
            />
            {errors?.password?.type === 'required' && (
              <InputErrorMessage>Password required</InputErrorMessage>
            )}
            {errors?.password?.type === 'mismatch' && (
              <InputErrorMessage>Password Invalid</InputErrorMessage>
            )}
          </LoginInputContainer>
          <CustomButton
            startIcon={<FiLogIn size={18} />}
            onClick={() => handleSubmit(handleSubmitPress)()}>
            Enter
          </CustomButton>
        </LoginContent>
      </LoginContainer>
    </>
  )
}

export default Login
