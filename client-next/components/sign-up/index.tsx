'use client';

import { useState } from 'react';

import { getAuth } from 'firebase/auth';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { app } from '@/utils/firebase';
import { toast } from 'react-toastify';

import FormInput from '../form-input';
import CustomButton from '../custom-button';

import { SignUpContainer, SignUpTitle, ButtonContainer } from './styles';

function SignUp() {
  const [userCredentials, setCredentials] = useState({
    email: '',
    displayName: '',
    password: '',
    confirmPassword: '',
  });
  const { email, displayName, password, confirmPassword } = userCredentials;

  const auth = getAuth(app);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      toast.error(<p className='toast-text'>Passwords don't match</p>);
      return;
    }

    createUserWithEmailAndPassword(email, password);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignUpContainer>
      <SignUpTitle>I do not have an account</SignUpTitle>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='Display Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='Password'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
          required
        />
        <ButtonContainer>
          <CustomButton type='submit'>
            {loading ? 'Loading...' : 'SIGN UP'}
          </CustomButton>
        </ButtonContainer>
        {error && <p className='text-red-500 mt-2'>{error.message}</p>}
      </form>
    </SignUpContainer>
  );
}

export default SignUp;
