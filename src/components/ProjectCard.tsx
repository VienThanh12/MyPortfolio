import Image from 'next/image';
import Badge from './Badge';
import { ProjectItem } from '@/app/props';

interface ProjectCardProps extends ProjectItem {}

const ProjectCard = (props: ProjectCardProps) => {
  const { title, description, stack, url, image } = props;

  return (
    <a target="_blank" href={url}>
      <div className="card bg-white min-h-28 border-slate-100 highlight-white dark:bg-slate-800 overflow-hidden dark:border-slate-500 ring-1 transition duration-300 ring-slate-900/5 shadow-xl rounded-xl mb-6 flex md:gap-4 flex-col md:flex-row">
        <div className="left md:w-5/12 pt-[45%] md:pt-0  dark:border-slate-600 relative border-b md:border-b-0">
          <Image style={{ objectFit: 'cover', objectPosition: '0 0' }} src={image} alt="project" fill />
        </div>
        <div className="right md:w-7/12 md:p-6 p-4">
          <p className="font-bold text-lg dark:text-white">{title}</p>
          <p className="py-2">{description}</p>
          <div>
            {stack?.length ? (
              <div className="flex flex-wrap gap-2 ">
                {stack.map((item, idx) => (
                  <Badge key={idx} color="gray">
                    {item}
                  </Badge>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
