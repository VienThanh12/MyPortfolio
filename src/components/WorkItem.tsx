import dayjs from 'dayjs';
import Image from 'next/image';
import { ExperienceItem } from '../app/props';
import Badge from './Badge';

interface WorkItemProps extends ExperienceItem {}

const getTimeToX = (time1: string, time2?: string) => {
  if (!time2) return dayjs(time1).subtract(1, 'month').toNow(true);
  return dayjs(time1).to(dayjs(time2).add(1, 'month'), true);
};

const WorkItem = (props: WorkItemProps) => {
  const { time, company, title, location, content, startDate, endData, companyLogo, companyURL } = props;

  return (
    <div key={company} className="text-sm py-6">
      <a target="_blank" href={companyURL}>
        <div className="flex items-center mb-2">
          {companyLogo && <Image src={companyLogo} className="mr-2" alt={company} width={48} height={48} />}
          <div className="dark:text-gray-100 company text-xl font-bold">{company}</div>
        </div>
      </a>
      <div className="flex flex-col lg:flex-row justify-between mb-2">
        <p className="font-bold dark:text-slate-200 text-base">{title}</p>
        <p className=" text-slate-400 dark:text-gray-400">{time}</p>
      </div>
      <p className="mb-2 text-sm">{location}</p>
      <div className="mb-4">
        <p className="text-base mb-2">{content.intro} </p>
        <ul className="dark:text-slate-400 list-disc">
          {content.list?.length ? content.list.map((i, idx) => <li key={idx}> {i} </li>) : null}
        </ul>
      </div>
      {content.stack?.length ? (
        <div className="flex flex-wrap gap-2 ">
          {content.stack.map((item, idx) => (
            <Badge key={idx} color="gray">
              {item}
            </Badge>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default WorkItem;
