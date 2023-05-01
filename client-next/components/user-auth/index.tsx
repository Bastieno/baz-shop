import { useCallback, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { app } from '@/utils/firebase';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { userFailure, userSuccess } from '@/redux/features/user/userSlice';

function UserAuth({ children }: { children: React.ReactNode }) {
  const currentUser = useAppSelector((state) => state.user.currentUser);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const pathname = usePathname();

  const searchParams = useSearchParams();
  const redirectUri = searchParams.get('redirectUri');

  const auth = getAuth(app);
  const [user, loading, error] = useAuthState(auth);

  const userNextRoute = useCallback(() => {
    if (pathname === '/signin') {
      if (redirectUri) {
        router.push(redirectUri);
      } else {
        router.push('/');
      }
    } else {
      router.push(pathname);
    }
  }, [pathname, redirectUri]);

  useEffect(() => {
    if (user) {
      dispatch(
        userSuccess({
          id: user.uid,
          email: user.email as string,
          displayName: user.displayName,
        })
      );
      userNextRoute();
    }

    if (error) {
      dispatch(userFailure(error.message));
    }
  }, [user, error, userNextRoute]);

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
