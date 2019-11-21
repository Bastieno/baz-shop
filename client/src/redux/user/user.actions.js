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

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION
});

export const signOutStart = () => ({
  type: UserActionTypes.SIGNOUT_START
})

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGNOUT_SUCCESS
})

export const signOutFailure = (error) => ({
  type: UserActionTypes.SIGNOUT_FAILURE,
  payload: error
})

export const signUpStart = (userData) => ({
  type: UserActionTypes.SIGNUP_START,
  payload: userData
})

export const signUpSuccess = (user) => ({
  type: UserActionTypes.SIGNUP_SUCCESS,
  payload: user
})

export const signUpFailure = (error) => ({
  type: UserActionTypes.SIGNUP_FAILURE,
  payload: error
})
