'use client';

import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import Head from './head';
import StyledJsxRegistry from './lib/registry';
import UserAuth from '@/components/user-auth';

import '../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <Head />
      <body>
        <StyledJsxRegistry>
          <Provider store={store}>
            <UserAuth>
              {children}
            </UserAuth>
          </Provider>
        </StyledJsxRegistry>
      </body>
    </html>
  );
}
