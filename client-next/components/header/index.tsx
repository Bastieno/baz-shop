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
import { toast } from 'react-toastify';

function Header() {
  const [isCartDropdownHidden, setIsCartDropdownHidden] = useState(true);
  const currentUser = useAppSelector((state) => state.user.currentUser);
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const dispatch = useAppDispatch();

  const auth = getAuth(app);
  const [signOut, loading, error] = useSignOut(auth);

  const toggleCartHidden = () => setIsCartDropdownHidden((prev) => !prev);
  const itemCount = cartItems.reduce((acc, { quantity }) => acc + quantity, 0);

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
                toast(<p className='toast-text'>You are signed out</p>);
              } else {
                dispatch(userFailure(error?.message));
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
        <CartIcon itemCount={itemCount} toggleCartHidden={toggleCartHidden} />
      </OptionsContainer>
      {isCartDropdownHidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
}

export default Header;
