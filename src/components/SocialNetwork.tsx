import { SOCIAL_NETWORK_LINKS, SocialNetworkType } from '@/app/props';
import { IconType } from 'react-icons';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import cn from 'classnames';
import { capitalize } from '@/utils';

const socialIcons: Record<SocialNetworkType, IconType> = {
  linkedin: FaLinkedin,
  github: FaGithub,
};

interface SocialNetworkIconsProps {
  className?: string;
  size?: number;
  isResponsive?: boolean;
}

export const SocialNetworkIcons = (props: SocialNetworkIconsProps) => {
  const { isResponsive, className = '', size = 28 } = props;

  return (
    <div
      className={cn(
        className,
        'socialNetworkIcons flex gap-4 py-2 flex-wrap items-center justify-center sm:justify-start transition-colors duration-300',
        { 'flex-col sm:flex-row': isResponsive }
      )}
    >
      {Object.entries(socialIcons).map(([key, Icon]) => (
        <a
          key={key}
          title={capitalize(key)}
          target="_blank"
          rel="noopener noreferrer"
          href={SOCIAL_NETWORK_LINKS[key as SocialNetworkType]}
          className="transform hover:scale-110 transition-transform duration-200"
        >
          <Icon
            size={size}
            className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
          />
        </a>
      ))}
    </div>
  );
};

const SocialNetwork = () => {
  return (
    <div className="social w-full lg:block mt-8">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">Connect With Me</h2>

        <div className="mb-4 text-gray-700 dark:text-gray-300">
          <a
            href="mailto:Vien.Ha@nokia.com"
            className="block font-medium underline underline-offset-2 decoration-indigo-400 hover:decoration-indigo-600 dark:hover:decoration-indigo-200 transition-colors duration-200 mb-2"
          >
            Vien.Ha@nokia.com
          </a>
          <p className="text-sm flex items-center space-x-2">
            <span className="font-medium">Location:</span>
            <span className="text-gray-600 dark:text-gray-400">Helsinki, Finland</span>
          </p>
        </div>

        <SocialNetworkIcons isResponsive size={28} />
      </div>
    </div>
  );
};

export default SocialNetwork;
