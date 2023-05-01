import { useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { userFailure, userSuccess } from '@/redux/features/user/userSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { app } from '@/utils/firebase';
import { usePathname, useRouter } from 'next/navigation';

function UserAuth({ children }: { children: React.ReactNode }) {
  const currentUser = useAppSelector(state => state.user.currentUser);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const pathname = usePathname();

  const auth = getAuth(app);
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      dispatch(
        userSuccess({
          id: user.uid,
          email: user.email as string,
          displayName: user.displayName,
        })
      );
      if (pathname === '/signin') {
        router.push('/');
      } else {
        router.push(pathname);
      }
    }
    if (error) {
      dispatch(userFailure(error.message));
    }
  }, [user, error, pathname]);

  if (currentUser) {
    return <>{children}</>;
  }

  if (loading)
    return (
      <div className='w-[100%] h-screen flex items-center justify-center'>
        Loading...
      </div>
    );

  return <>{children}</>;
}

export default UserAuth;
