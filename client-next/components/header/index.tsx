import { useState } from 'react';
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
import { useAppSelector } from '@/redux/hooks';

function Header() {
  const [isCartDropdownHidden, setIsCartDropdownHidden] = useState(true);
  const currentUser = useAppSelector(state => state.user.currentUser);

  const toggleCartHidden = () => setIsCartDropdownHidden(prev => !prev);
  return (
    <HeaderContainer>
      <LogoContainer href='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink href='/shop'>SHOP</OptionLink>
        <OptionLink href='/shop'>CONTACT</OptionLink>
        {currentUser ? (
          <OptionDiv className='option' onClick={() => {}}>
            {' '}
            SIGN OUT{' '}
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
