import { techStacks } from '@/app/props';

const Stacks = (props: { className?: string }) => {
  const { className = '' } = props;
  return (
    <div className={`tech-stacks flex flex-wrap gap-2 ${className}`}>
      {techStacks.map((item, idx) => (
        <div
          key={idx}
          className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-200 transition-transform duration-300 hover:scale-105 hover:bg-gray-300 dark:hover:bg-slate-600 cursor-pointer"
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Stacks;
