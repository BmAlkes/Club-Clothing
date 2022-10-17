import { useForm } from 'react-hook-form'
import { FiLogIn } from 'react-icons/fi'
import validator from 'validator'

// styles
import {
  SignUpInputContainer,
  SignUpContainer,
  SignUpContent,
  SignUpHeadline
} from './Signup.styles'

// components
import CustomInput from '../../components/custom-input/CustomInput'
import Header from '../../components/header/header'
import InputErrorMessage from '../../components/input-error-component/InputError'
import CustomButton from '../../components/custom-buttton/CustomButton'
import {
  AuthError,
  AuthErrorCodes,
  createUserWithEmailAndPassword
} from 'firebase/auth'
import { auth, db } from '../../config/firebase.config'
import { addDoc, collection } from 'firebase/firestore'

interface SignUpForm {
  name: string
  lastName: string
  email: string
  password: string
  passwordConfirmation: string
}

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setError
  } = useForm<SignUpForm>()

  const watchPassword = watch('password')

  const handleSubmitPress = async (data: SignUpForm) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )
      await addDoc(collection(db, 'users'), {
        id: userCredentials.user.uid,
        fistName: data.name,
        lastName: data.lastName,
        email: userCredentials.user.email
      })
    } catch (err) {
      const error = err as AuthError

      if (error.code === AuthErrorCodes.EMAIL_EXISTS) {
        return setError('email', { type: 'alreadyExists' })
      }
    }
  }

  return (
    <>
      <Header />
      <SignUpContainer>
        <SignUpContent>
          <SignUpHeadline>Create Your Account</SignUpHeadline>

          <SignUpInputContainer>
            <p>Name</p>
            <CustomInput
              hasError={!!errors?.name}
              placeholder="write your name"
              {...register('name', { required: true })}
            />

            {errors?.name?.type === 'required' && (
              <InputErrorMessage>Name is required</InputErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Sobrenome</p>
            <CustomInput
              hasError={!!errors?.lastName}
              placeholder="write your lastName"
              {...register('lastName', { required: true })}
            />

            {errors?.lastName?.type === 'required' && (
              <InputErrorMessage>LastName is required.</InputErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>E-mail</p>
            <CustomInput
              hasError={!!errors?.email}
              placeholder="write your email"
              {...register('email', {
                required: true,
                validate: (value) => {
                  return validator.isEmail(value)
                }
              })}
            />

            {errors?.email?.type === 'required' && (
              <InputErrorMessage>Email is required.</InputErrorMessage>
            )}
            {errors?.email?.type === 'alreadyExists' && (
              <InputErrorMessage>Email already exists.</InputErrorMessage>
            )}

            {errors?.email?.type === 'validate' && (
              <InputErrorMessage>Please insert a valid email</InputErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Senha</p>
            <CustomInput
              hasError={!!errors?.password}
              placeholder="write your password"
              type="password"
              {...register('password', { required: true, minLength: 6 })}
            />

            {errors?.password?.type === 'required' && (
              <InputErrorMessage>Password required.</InputErrorMessage>
            )}
            {errors?.password?.type === 'minLength' && (
              <InputErrorMessage>
                Invalid Password minimum 6 caracters.
              </InputErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Password Confirmation</p>
            <CustomInput
              hasError={!!errors?.passwordConfirmation}
              placeholder="write again your password"
              type="password"
              {...register('passwordConfirmation', {
                required: true,
                minLength: 6,
                validate: (value) => {
                  return value === watchPassword
                }
              })}
            />

            {errors?.passwordConfirmation?.type === 'required' && (
              <InputErrorMessage>
                the password confirmation is required
              </InputErrorMessage>
            )}

            {errors?.passwordConfirmation?.type === 'validate' && (
              <InputErrorMessage>
                confirmation need to be the same as the password
              </InputErrorMessage>
            )}
          </SignUpInputContainer>

          <CustomButton
            onClick={() => handleSubmit(handleSubmitPress)()}
            startIcon={<FiLogIn size={18} />}>
            Create Account
          </CustomButton>
        </SignUpContent>
      </SignUpContainer>
    </>
  )
}
export default SignUp
