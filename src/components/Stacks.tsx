import { techStacks } from '@/app/props';

const Stacks = (props: any) => {
  const { className } = props;
  return (
    <div className={'tech-stacks flex flex-wrap gap-x-2 ' + className}>
      {techStacks.map((item, idx) => {
        return (
          <div
            key={idx}
            className="bg-gray-200 transition duration-500 cursor-grab hover:bg-gray-300 hover:scale-105 dark:bg-slate-700 dark:hover:bg-slate-600 dark:hover:text-gray-50  rounded-md inline-block px-2 py-1 mb-2 text-sm"
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default Stacks;
