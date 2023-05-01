import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

import CustomButton from '../custom-button';
import { useAppSelector } from '@/redux/hooks';
import { usePathname, useRouter } from 'next/navigation';

// Call `loadStripe` outside of the component render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

function CheckoutButton() {
  const [isLoadingStripeSession, setIsLoadingStripeSession] = useState(false);
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const user = useAppSelector((state) => state.user.currentUser);

  const router = useRouter();
  const pathname = usePathname();

  const handleCheckout = async () => {
    try {
      setIsLoadingStripeSession(true);
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: cartItems,
          userEmail: user?.email,
        }),
      });
      const data = await response.json();
      // Redirects to stripe checkout hosted site
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      setIsLoadingStripeSession(false);
    }
  };

  if (!user) {
    return (
      <CustomButton
        type='button'
        onClick={() => router.push(`/signin?redirectUri=${pathname}`)}
      >
        Login to checkout
      </CustomButton>
    );
  }

  return (
    <CustomButton
      primary
      type='button'
      disabled={isLoadingStripeSession}
      onClick={handleCheckout}
    >
      {isLoadingStripeSession ? 'Loading...' : 'Checkout'}
    </CustomButton>
  );
}

export default CheckoutButton;
