'use client';

import { cn } from '@/lib/utils';
import { Api } from '@/services/api-client';
import { Product } from '@prisma/client';
import { Search } from 'lucide-react';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { useClickAway, useDebounce } from 'react-use';

interface Props {
  className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [focused, setFocused] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setFocused(false));

  useDebounce(
    () => {
      Api.products.search(searchQuery).then((items) => setProducts(items));
    },
    300,
    [searchQuery],
  );

  return (
    <>
      {focused && <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30" />}
      <div
        ref={ref}
        className={cn('flex rounded-2xl flex-1 justify-between relative h-11 z-30', className)}>
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 left-3 h-5 text-gray-400" />
        <input
          className="bg-gray-50 border text-sm rounded-lg w-full pl-11"
          placeholder="Search..."
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setFocused(true)}
        />

        <div
          className={cn(
            'absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30',
            focused && 'visible opacity-100 top-12',
          )}>
          {products.map((product) => (
            <Link
              key={product.id}
              className="flex items-center gap-3 w-full px-3 cursor-pointer hover:bg-primary/10"
              href={`/product/${product.id}`}>
              <img className="rounded-sm h-8 w-8" src={product.imageUrl} alt={product.name} />
              <span>{product.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
