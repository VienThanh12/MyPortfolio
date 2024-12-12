'use client';

import useScroll from '@/hooks/useScroll';
import useScrollPosition from '@/hooks/useScrollPosition';
import LightDarkButton from '../LightDarkButton';
import Link from 'next/link';

const Navbar = () => {
  const scroll = useScroll();
  const scrollPos = useScrollPosition();

  let classScroll = '';

  if (scrollPos < 86) {
    classScroll = 'translate-y-0';
  } else {
    if (scroll === 'down') {
      classScroll = '-translate-y-full down';
    } else {
      classScroll = 'translate-y-0 up';
    }
  }

  const handleScrollTop = (e: any) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <nav
      id="navbar"
      className={
        'w-full navbar dark:ring-slate-100/25 ring-slate-900/5 bg-white z-20 relative dark:bg-slate-900 dark:text-slate-300 lg:top-0 px-6 pt-6 lg:px-0  lg:pt-6 lg:pb-6 lg:fixed lg:transition lg:duration-200  ' +
        classScroll
      }
    >
      <div className="container mx-auto max-w-screen-xl justify-end items-center lg:px-24 hidden lg:flex">
        <ul className="flex justify-between font-bold text-lg gap-8">
          <li className="transition duration-200">
            <Link href="/#navbar"> Home</Link>
          </li>
          <li className="transition duration-200">
            <Link href="/#projects"> Projects</Link>
          </li>
          <li className="transition duration-200">
            <Link href="/photos"> Certificates </Link>
          </li>
          <li className="transition duration-200">
            <Link href="/contact"> Contact</Link>
          </li>
        </ul>
        <LightDarkButton />
      </div>
      <div className="flex lg:hidden items-center justify-end">
        {/* <FaBars size={24} /> */}
        <LightDarkButton />
      </div>
    </nav>
  );
};

export default Navbar;
