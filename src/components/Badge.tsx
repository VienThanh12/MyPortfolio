import { ReactNode } from 'react';

const MAP_COLOR = {
  gray: ['bg-gray-100 dark:bg-gray-700', 'text-gray-800 dark:text-gray-200', 'ring-gray-500/20'],
  red: ['bg-red-50', 'text-red-700', 'ring-red-600/10'],
  yellow: ['bg-yellow-50', 'text-yellow-800', 'ring-yellow-600/20'],
  green: ['bg-green-50', 'text-green-700', 'ring-green-600/20'],
  blue: ['bg-blue-50', 'text-blue-700', 'ring-blue-700/10'],
  indigo: ['bg-indigo-50', 'text-indigo-700', 'ring-indigo-700/10'],
  purple: ['bg-purple-50', 'text-purple-700', 'ring-purple-700/10'],
  pink: ['bg-pink-50', 'text-pink-700', 'ring-pink-700/10'],
};

interface BadgeProps {
  children: ReactNode;
  color?: keyof typeof MAP_COLOR;
}

const Badge = ({ children, color = 'gray' }: BadgeProps) => {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full ${MAP_COLOR[color][0]} ${MAP_COLOR[color][1]} ring-1 ring-inset ${MAP_COLOR[color][2]} px-3 py-1 text-xs font-medium leading-snug transition-transform transition-colors duration-300 hover:brightness-110`}
    >
      {children}
    </span>
  );
};

export default Badge;
