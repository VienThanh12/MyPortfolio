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
    <div className="mb-8">
      <a
        target="_blank"
        href={companyURL}
        rel="noopener noreferrer"
        className="block bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6 shadow hover:shadow-md transition-shadow duration-300 hover:-translate-y-0.5"
      >
        {/* Company Header */}
        <div className="flex items-center mb-4">
          {companyLogo && (
            <div className="flex-shrink-0 mr-3">
              <Image
                src={companyLogo}
                alt={company}
                width={48}
                height={48}
                className="rounded-md object-cover"
              />
            </div>
          )}
          <div>
            <h2 className="text-xl font-bold dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              {company}
            </h2>
            <p className="text-sm text-slate-400 dark:text-gray-400 mt-1">
              {time}
            </p>
          </div>
        </div>

        {/* Role & Location */}
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-4">
          <p className="font-semibold text-base dark:text-slate-200">{title}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 sm:mt-0 mt-2">
            {location}
          </p>
        </div>

        {/* Content & Responsibilities */}
        <div className="mb-4">
          {content.intro && <p className="text-base text-gray-700 dark:text-gray-300 mb-2 leading-relaxed">{content.intro}</p>}
          {content.list?.length ? (
            <ul className="list-disc ml-5 space-y-1 text-gray-700 dark:text-gray-300">
              {content.list.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          ) : null}
        </div>

        {/* Tech Stack */}
        {content.stack?.length ? (
          <div className="flex flex-wrap gap-2 mt-4">
            {content.stack.map((item, idx) => (
              <Badge key={idx} color="gray">
                {item}
              </Badge>
            ))}
          </div>
        ) : null}
      </a>
    </div>
  );
};

export default WorkItem;
