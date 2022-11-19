import React, { FunctionComponent, useEffect, useContext } from 'react'
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineHome
} from 'react-icons/ai'
import { useNavigate, useSearchParams } from 'react-router-dom'
import CustomButton from '../../components/custom-buttton/CustomButton'
import Header from '../../components/header/header'
import { CartContext } from '../../contexts/cart.context'
import Colors from '../../theme/theme.colors'
import {
  PaymentConfirmationContainer,
  PaymentConfirmationContent
} from './Payment'

const PaymentConfirmation: FunctionComponent = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { clearProducts } = useContext(CartContext)

  const status = searchParams.get('success')
  const isCanceled = searchParams.get('canceled') === 'true'

  useEffect(() => {
    if (status === 'true') {
      clearProducts()
    }
  }, [status])

  const handleClickBackHome = () => {
    navigate('/')
  }

  return (
    <>
      <Header />
      <PaymentConfirmationContainer>
        <PaymentConfirmationContent>
          {status === 'true' && (
            <>
              <AiOutlineCheckCircle size={120} color={Colors.sucess} />
              <p>Your purchase has been successfully completed</p>
            </>
          )}
          {(status === 'false' || isCanceled) && (
            <>
              <AiOutlineCloseCircle size={120} color={Colors.error} />
              <p>There was an error when checking out, please try again</p>
            </>
          )}
          <CustomButton
            startIcon={<AiOutlineHome size={25} />}
            onClick={handleClickBackHome}>
            Go to Home Page
          </CustomButton>
        </PaymentConfirmationContent>
      </PaymentConfirmationContainer>
    </>
  )
}

export default PaymentConfirmation
