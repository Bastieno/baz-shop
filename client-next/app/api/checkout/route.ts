import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import type { CartItem, User } from '@/utils/types';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2022-11-15',
});
export async function POST(request: Request) {
  const body = await request.json();
  const { items, userEmail }: { items: CartItem[]; userEmail: User['email'] } =
    body;

  const line_items = items.map((item) => ({
    price: item.priceId,
    quantity: item.quantity,
  }));

  try {
    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: 'payment',
      customer_email: userEmail,
      success_url: `${request.headers.get('origin')}/checkout?success=true`,
      cancel_url: `${request.headers.get('origin')}/checkout?canceled=true`,
    });
    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    return NextResponse.json({
      message: err.message,
      status: err.statusCode || 500,
    });
  }
}
