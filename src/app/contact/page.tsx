import SocialNetwork, { SocialNetworkIcons } from '@/components/SocialNetwork';
import { garamond } from '../font';

const Contact = () => {
  return (
    <div className="w-full lg:max-w-2xl">
      <h1
        className={'text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-16 font-bold dark:text-white ' + garamond.className}
      >
        Contact
      </h1>
      <p className="mb-4 lg:text-lg">
        If you have a project or just want to say hi, feel free to
        contact me.
      </p>

      <p className="mb-4 lg:text-lg">
        You can drop me an email at{' '}
        <a
          className="underline font-bold decoration-sky-400 transition duration-200 hover:decoration-sky-600"
          href="mailto:jimtran98@gmail.com"
        >
          Vien.Ha@nokia.com
        </a>{' '}
        or find me on social media platforms. I&apos;ll get back to you as soon as possible.
      </p>
      <SocialNetworkIcons size={28} isResponsive />
    </div>
  );
};

export default Contact;
