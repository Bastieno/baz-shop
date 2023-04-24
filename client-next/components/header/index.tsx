import { useState } from 'react';
import { getAuth } from 'firebase/auth';
import { useSignOut } from 'react-firebase-hooks/auth';
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  OptionDiv,
} from './styles';
import Logo from '../logo';
import CartIcon from '../cart-icon';
import CartDropdown from '../cart-dropdown';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { app } from '@/utils/firebase';
import { logout, userFailure } from '@/redux/features/user/userSlice';

function Header() {
  const [isCartDropdownHidden, setIsCartDropdownHidden] = useState(true);
  const currentUser = useAppSelector((state) => state.user.currentUser);
  const dispatch = useAppDispatch();

  const auth = getAuth(app);
  const [signOut, loading, error] = useSignOut(auth);

  const toggleCartHidden = () => setIsCartDropdownHidden((prev) => !prev);
  return (
    <HeaderContainer>
      <LogoContainer href='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink href='/shop'>SHOP</OptionLink>
        <OptionLink href='/shop'>CONTACT</OptionLink>
        {currentUser ? (
          <OptionDiv
            className='option'
            onClick={async () => {
              const success = await signOut();
              if (success) {
                dispatch(logout());
                alert('You are signed out');
              } else {
                dispatch(userFailure(error));
              }
            }}
          >
            {loading ? 'SIGNING OUT' : 'SIGN OUT'}
          </OptionDiv>
        ) : (
          <OptionLink className='option' href='/signin'>
            SIGN IN
          </OptionLink>
        )}
        <CartIcon itemCount={2} toggleCartHidden={toggleCartHidden} />
      </OptionsContainer>
      {isCartDropdownHidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
}

export default Header;
