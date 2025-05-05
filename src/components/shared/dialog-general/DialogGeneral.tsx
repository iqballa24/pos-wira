import { ReactNode } from 'react';

import { cn } from '@/utils/cn';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/elements/dialog';

const DialogGeneral = ({
  isOpen,
  title,
  children,
  description,
  onToggle,
  className,
}: {
  isOpen: boolean;
  title: string;
  description?: string;
  children: ReactNode;
  onToggle?: () => void;
  className?: string;
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onToggle}>
      <DialogContent className={cn('rounded-lg', className)}>
        <DialogHeader className="gap-5">
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
          {children}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DialogGeneral;
