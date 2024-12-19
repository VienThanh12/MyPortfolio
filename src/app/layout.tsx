import type { Metadata } from 'next';
import '@/styles/global.css';
import '@/styles/main.scss';
import 'antd/dist/reset.css';

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
import { garamond } from './font';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'bg-white dark:bg-slate-900 relative ' + lato.className}>
        <Navbar />
        
         <header className="relative bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20" >
        <div className="max-w-7xl mx-auto px-4 text-center" style={{marginBottom: '-40px'}}>
          <h1
            id="about"
            className={`text-5xl md:text-6xl font-bold mb-4 ${garamond.className}`}
            style={{marginTop: '60px'}}
          >
            Ha Vien
          </h1>
          <h2 className="text-lg md:text-xl font-light">
            Software Engineer Intern @ Nokia | Bachelor of Automation Engineer
          </h2>
          <p className="mt-4 text-sm md:text-base max-w-md mx-auto font-light">
            Passionate about innovation, problem-solving, and creating impactful digital experiences.
          </p>
        
        </div>
      </header>

        <main className="dark:text-gray-300 max-w-screen-xl mx-auto px-10 lg:px-24 lg:mt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
