import { useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { userFailure, userSuccess } from '@/redux/features/user/userSlice';
import { useAppDispatch } from '@/redux/hooks';
import { app } from '@/utils/firebase';
import { useRouter } from 'next/navigation';

function UserAuth({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const auth = getAuth(app);
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      dispatch(
        userSuccess({
          id: user.uid,
          email: user.email,
          displayName: user.displayName,
        })
      );
      router.push('/');
    }
    if (error) {
      dispatch(userFailure(error));
    }
  }, [user, error]);

  if (loading)
    return (
      <div className='w-[100%] h-screen flex items-center justify-center'>
        Loading...
      </div>
    );

  return <>{children}</>;
}

export default UserAuth;
