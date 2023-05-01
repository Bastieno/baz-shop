'use client';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { persistor, store } from '@/redux/store';
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
            <PersistGate
              loading={
                <div className='w-[100%] h-screen flex items-center justify-center'>
                  Loading...
                </div>
              }
              persistor={persistor}
            >
              <UserAuth>{children}</UserAuth>
            </PersistGate>
          </Provider>
        </StyledJsxRegistry>
      </body>
    </html>
  );
}
