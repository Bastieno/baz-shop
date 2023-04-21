import { Open_Sans } from 'next/font/google';
import '../styles/globals.css';

export const metadata = {
  title: 'Baz-shop',
  description: 'A simple app built using Nextjs',
};

const openSans = Open_Sans({
  weight: ['300', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
