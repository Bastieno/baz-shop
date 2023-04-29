'use client';
import { useEffect, useState } from 'react';

import { getAuth } from 'firebase/auth';
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';

import FormInput from '../form-input';
import CustomButton from '../custom-button';

import { app } from '@/utils/firebase';
import { useAppDispatch } from '@/redux/hooks';
import { userFailure } from '@/redux/features/user/userSlice';

import { SignInContainer, SignInTitle, ButtonsBarContainer } from './styles';

function SignIn() {
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const { email, password } = userCredentials;

  const dispatch = useAppDispatch();

  const auth = getAuth(app);
  const [
    signInWithEmailAndPassword,
    ,
    loadingFromSignInWithEmailAndPassword,
    errorFromSignInWithEmailAndPassword,
  ] = useSignInWithEmailAndPassword(auth);

  const [
    signInWithGoogle,
    ,
    loadingFromSignInWithGoogle,
    errorFromSignInWithGoogle,
  ] = useSignInWithGoogle(auth);

  const error =
    errorFromSignInWithEmailAndPassword || errorFromSignInWithGoogle;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  useEffect(() => {
    if (error) {
      dispatch(userFailure(error.message));
    }
  }, [error]);

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          handleChange={handleChange}
          value={email}
          label='Email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          handleChange={handleChange}
          label='Password'
          required
        />
        <ButtonsBarContainer>
          <CustomButton type='submit'>
            {loadingFromSignInWithEmailAndPassword ? 'Loading...' : 'Sign in'}
          </CustomButton>
          <CustomButton
            type='button'
            onClick={() => signInWithGoogle()}
            primary
          >
            {loadingFromSignInWithGoogle ? 'Loading...' : 'Sign in with Google'}
          </CustomButton>
        </ButtonsBarContainer>
        {error && <p className='text-red-500 mt-2'>{error.message}</p>}
      </form>
    </SignInContainer>
  );
}

export default SignIn;
