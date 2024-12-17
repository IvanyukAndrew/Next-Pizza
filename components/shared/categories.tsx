'use client';

import { useCategoryStore } from '@/app/store/category';
import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  className?: string;
}

const cats = [
  { id: 1, name: 'Піца' },
  { id: 2, name: 'Комбо' },
  { id: 3, name: 'Закуски' },
  { id: 4, name: 'Коктелі' },
  { id: 5, name: 'Кава' },
  { id: 6, name: 'Напої' },
  { id: 7, name: 'Десерти' },
];

export const Categories: React.FC<Props> = ({ className }) => {
  const activeIndex = useCategoryStore((state) => state.activeId);
  return (
    <div className={cn('', className)}>
      {cats.map(({ name, id }, index) => (
        <a
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5',
            activeIndex === id && 'bg-white shadow-md shadow-gray-200 text-primary',
          )}
          href={`/#${name}`}
          key={index}>
          <button>{name}</button>
        </a>
      ))}
    </div>
  );
};
