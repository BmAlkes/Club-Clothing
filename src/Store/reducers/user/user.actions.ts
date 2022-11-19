import User from '../../../types/user.type'
import UserActionTypes from './user.action-types'

export const loginUser = (payload: User) => ({
  type: UserActionTypes.LOGIN,
  payload
})

export const logout = () => ({ type: UserActionTypes.LOGOUT })
