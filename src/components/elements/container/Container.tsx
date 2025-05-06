'use client';

import React from 'react';

import { cn } from '@/utils';

interface IContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = (props: IContainerProps) => {
  const { children, className } = props;

  return (
    <section className="mt-2 w-full bg-white px-5">
      <div className={cn('mx-auto w-full max-w-screen-xl', className)}>{children}</div>
    </section>
  );
};

export default Container;
