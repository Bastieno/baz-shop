import SignIn from '../sign-in';
import SignUp from '../sign-up';

import { SignInAndSignUpContainer } from './styles';

const SignInAndSignUpPage = () => (
  <SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
);

export default SignInAndSignUpPage;
