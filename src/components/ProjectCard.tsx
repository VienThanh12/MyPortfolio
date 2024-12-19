import Image from 'next/image';
import Badge from './Badge';
import { ProjectItem } from '@/app/props';

interface ProjectCardProps extends ProjectItem {}

const ProjectCard = (props: ProjectCardProps) => {
  const { title, description, stack, url, image } = props;

  return (
    <a 
      target="_blank" 
      rel="noopener noreferrer" 
      href={url}
      className="block group"
    >
      <div className="card bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-transform duration-300 flex flex-col md:flex-row">
        
        {/* Image Section */}
        <div className="relative md:w-5/12 w-full h-56 md:h-auto overflow-hidden">
          <Image 
            src={image} 
            alt={title} 
            fill
            className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Content Section */}
        <div className="md:w-7/12 p-4 md:p-6 flex flex-col justify-center">
          <h3 className="font-semibold text-xl dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
            {description}
          </p>
          {stack?.length ? (
            <div className="flex flex-wrap gap-2 mt-auto">
              {stack.map((item, idx) => (
                <Badge key={idx} color="gray">
                  {item}
                </Badge>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
