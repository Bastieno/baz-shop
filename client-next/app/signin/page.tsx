'use client';

import Header from '@/components/header';
import SignInAndSignUpPage from '@/components/sigin-in-sign-up';
import { useAppSelector } from '@/redux/hooks';

function SignIn() {
  const currentUser = useAppSelector((state) => state.user.currentUser);

  if (currentUser) {
    return (
      <div className='w-[100%] h-screen flex items-center justify-center'>
        Loading...
      </div>
    );
  }

  return (
    <div className='flex flex-col'>
      <Header />
      <SignInAndSignUpPage />
    </div>
  );
}

export default SignIn;
