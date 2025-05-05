import { cva } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex h-fit items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-primary text-white shadow hover:bg-primary/90',
        destructive: 'bg-destructive text-white shadow-sm hover:bg-destructive/90',
        outline:
          'border border-primary bg-transparent text-primary shadow-sm hover:bg-primary hover:text-white',
        link: 'text-black underline-offset-4 hover:underline',
      },
      size: {
        default: 'px-8 py-[9px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export default buttonVariants;
