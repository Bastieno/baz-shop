import UserActionTypes from './user.types';

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGNIN_START
})

export const emailSignInStart = (userData) => ({
  type: UserActionTypes.EMAIL_SIGNIN_START,
  payload: userData
});

export const signInSuccess = (user) => ({
  type: UserActionTypes.SIGNIN_SUCCESS,
  payload: user
});

export const signInFailure = (error) => ({
  type: UserActionTypes.SIGNIN_FAILURE,
  payload: error
});


