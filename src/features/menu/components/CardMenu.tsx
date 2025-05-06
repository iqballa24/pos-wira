'use client';

import Image from 'next/image';

import { formatToRupiah } from '@/utils';

interface ICardMenuProps {
  image: string;
  name: string;
  category: string;
  price: number;
}

const CardMenu = (props: ICardMenuProps) => {
  const { image, name, category, price } = props;

  return (
    <div className="group flex h-[180px] w-full flex-1 cursor-pointer flex-col gap-3 rounded-lg sm:max-w-[216px]">
      <div className="relative h-[500px] w-full overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={name}
          layout="fill"
          placeholder="blur"
          loading="lazy"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2M2YzZjNiIvPg=="
          className="rounded-lg object-cover text-xs transition-transform duration-300 placeholder:text-xs group-hover:scale-105"
        />
      </div>
      <div className="flex w-full flex-row items-center justify-between">
        <div className="flex flex-col">
          <p className="text-sm font-bold">{name}</p>
          <p className="text-[10px] text-gray">{category}</p>
        </div>
        <p className="text-sm font-bold text-primary">Rp {formatToRupiah(price)}</p>
      </div>
    </div>
  );
};

export default CardMenu;
