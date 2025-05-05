'use client';

import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { VariantProps } from 'class-variance-authority';

import { cn } from '@/utils/cn';

import buttonVariants from '@/components/elements/button/variant';

interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ asChild, variant, size, className, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
    );
  },
);

Button.displayName = 'Button';

export default Button;
