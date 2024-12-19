import SocialNetwork, { SocialNetworkIcons } from '@/components/SocialNetwork';
import { garamond } from '../font';

const Contact = () => {
  return (
    <div className="flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <h1
          className={
            'text-4xl sm:text-5xl md:text-6xl mb-4 font-bold dark:text-white ' +
            garamond.className
          }
        >
          Contact
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300 mb-2">
          Let’s work together or just connect!
        </p>
        <hr className="border-gray-300 dark:border-gray-700 mb-6" />

        <p className="mb-4 text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Have a project in mind, or just want to say hi? Feel free to reach out. I’m always open to
          new opportunities, collaborations, or simply connecting with like-minded professionals.
        </p>

        <p className="mb-6 text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          You can drop me an email at{' '}
          <a
            className="underline font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors duration-200"
            href="mailto:Vien.Ha@nokia.com"
          >
            Vien.Ha@nokia.com
          </a>
          , or find me on my social channels below. I’ll do my best to get back to you as soon as
          possible!
        </p>

        <div className="flex justify-center mt-8">
          <SocialNetworkIcons size={28} isResponsive />
        </div>
      </div>
    </div>
  );
};

export default Contact;
