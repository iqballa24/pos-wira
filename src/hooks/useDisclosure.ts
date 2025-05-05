'use client';

import { useState } from 'react';

export interface IUseDisclosure {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
  onChangeValue?: (open: boolean) => void;
}

export default function useDisclosure(defaultValue?: boolean): IUseDisclosure {
  const [isOpen, setIsOpen] = useState(defaultValue || false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  const onToggle = () => setIsOpen(!isOpen);

  return { isOpen, onOpen, onClose, onToggle };
}
