import { SOCIAL_NETWORK_LINKS, SocialNetworkType } from '@/app/props';
import { IconType } from 'react-icons';
import { FaLinkedin, FaGithub, FaTelegram, FaUnsplash, FaInstagram } from 'react-icons/fa';
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
    <div className={cn(className, 'socialNetworkIcons flex gap-4 py-2 flex-wrap', { isResponsive })}>
      {Object.entries(socialIcons).map(([key, Icon]) => {
        return (
          <a key={key} title={capitalize(key)} target="_blank" href={SOCIAL_NETWORK_LINKS[key as SocialNetworkType]}>
            <Icon
              size={size}
              className="transition dark:text-white lg:dark:text-gray-300 lg:dark:hover:text-white duration-300 hover:text-black dark:hover:opacity-100 hover:scale-110"
            />
          </a>
        );
      })}
    </div>
  );
};

const SocialNetwork = () => {
  return (
    <div className="social hidden lg:block py-4 mb-6">
      <a
        href="mailto:jimtran98@gmail.com"
        className="mb-2 block transition duration-300 dark:hover:text-white dark:hover:opacity-100 hover:opacity-60"
      >
        Vien.Ha@nokia.fi
      </a>

      <div className="mb-2">
        <a> Espoo, Finland </a>
      </div>

      <SocialNetworkIcons />
    </div>
  );
};

export default SocialNetwork;
