'use client';

import React from 'react';

import { cn } from '@/utils';

interface IContainerProps {
  children: React.ReactNode;
  classNameWrapper?: string;
  className?: string;
}

const Container = (props: IContainerProps) => {
  const { children, classNameWrapper, className } = props;

  return (
    <section className={cn('mt-2 w-full bg-white px-5', classNameWrapper)}>
      <div className={cn('mx-auto w-full max-w-screen-xl', className)}>{children}</div>
    </section>
  );
};

export default Container;
