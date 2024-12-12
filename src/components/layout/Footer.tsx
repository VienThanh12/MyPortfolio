import dayjs from 'dayjs';
import { SocialNetworkIcons } from '../SocialNetwork';

const Footer = () => {
  return (
    <footer className=" bg-slate-200 dark:bg-slate-800 dark:text-slate-300 p-8 lg:p-12 ">
      <div className="copyright text-sm text-center dark:text-slate-400 ">
        <div className="text-center flex justify-center mb-2">
          <SocialNetworkIcons />
        </div>
        <p> © {dayjs().year()} Vien Ha. All rights reserved.</p>
        {/* <p> </p> */}
      </div>
    </footer>
  );
};

export default Footer;
