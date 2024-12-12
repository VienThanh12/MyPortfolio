import type { Metadata } from 'next';
import '@/styles/global.css';
import '@/styles/main.scss';
import { lato } from './font';
import dayjs from 'dayjs';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
const relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);

declare module 'dayjs' {
  interface Dayjs {
    to(...args: any): string;
    toNow(...args: any): string;
  }
}

export const metadata: Metadata = {
  title: 'Vien Ha',
  openGraph: {
    type: 'profile',
    images: [''],
    url: '',
  },
  description:
    'A software engineer based in Finland.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'bg-white dark:bg-slate-900 relative ' + lato.className}>
        <Navbar />
        <main className="dark:text-gray-300 max-w-screen-xl mx-auto px-10 lg:px-24 lg:mt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
