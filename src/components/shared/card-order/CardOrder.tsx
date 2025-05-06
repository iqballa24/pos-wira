'use client';

import React from 'react';

import { formatToRupiah } from '@/utils';

interface ICardOrderProps {
  id: number;
  customerName: string;
  total: number;
  price: number;
}

const CardOrder = (props: ICardOrderProps) => {
  const { id, customerName, total, price } = props;

  return (
    <div className="flex min-w-[243px] cursor-pointer flex-col gap-2 rounded-lg border border-border p-5 hover:border-primary hover:shadow-md">
      <span className="text-xs font-bold">#{id}</span>
      <div className="flex flex-col gap-1">
        <span className="text-xs text-gray">{customerName}</span>
        <span className="text-xs text-gray">
          {total} items - Rp {formatToRupiah(price)}
        </span>
      </div>
    </div>
  );
};

export default CardOrder;
