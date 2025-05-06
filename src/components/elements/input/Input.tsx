'use client';

import { ChangeEvent, FocusEvent, forwardRef, InputHTMLAttributes, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

import { useDisclosure } from '@/hooks';
import { cn } from '@/utils';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, IInputProps>(({ ...props }, ref) => {
  const {
    id,
    type = 'text',
    className,
    label,
    error,
    disabled,
    leftIcon,
    rightIcon,
    inputMode,
    onChange,
    ...otherProps
  } = props;

  const { isOpen: isFocus, onOpen: setTrueFocus, onClose: setFalseFocus } = useDisclosure(false);
  const { isOpen: showPassword, onToggle: togglePassword } = useDisclosure(false);
  const [inputValue, setInputValue] = useState('');

  const onFocusHandler = (event: FocusEvent<HTMLInputElement>) => {
    if (disabled) return;
    if (otherProps?.onFocus) otherProps.onFocus(event);
    setTrueFocus();
  };

  const onBlurHandler = (event: FocusEvent<HTMLInputElement>) => {
    if (disabled) return;
    if (otherProps?.onBlur) otherProps.onBlur(event);
    setFalseFocus();
  };

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event?.target?.value;

    if (inputMode === 'numeric' && /\D/g?.test(value)) return;
    if (id === 'phone' && value[0] === '0') return setInputValue(value.substring(1));

    setInputValue(event.target.value);

    if (onChange) onChange(event);
  };

  const PasswordIcon = showPassword ? EyeOff : Eye;

  return (
    <div className="flex flex-col gap-1">
      <div className="relative flex flex-col gap-3">
        {label && (
          <label htmlFor={id} className="pl-0.5 text-xs">
            {label}
          </label>
        )}
        <input
          ref={ref}
          name={label}
          type={type === 'password' ? (showPassword ? 'text' : 'password') : 'text'}
          id={id}
          className={cn(
            'peer block w-full rounded-full bg-transparent px-5 py-3 text-xs text-black ring-1 ring-border hover:ring-gray-500',
            {
              'outline-none ring-2 ring-black': isFocus,
              'cursor-not-allowed hover:!ring-gray-300': disabled,
              'ring-red-500 hover:ring-red-500': error,
              'pl-12': leftIcon,
            },
            className,
          )}
          value={inputValue}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          onChange={onChangeHandler}
          disabled={disabled}
          {...otherProps}
        />

        {leftIcon && (
          <div className="absolute left-2 top-1/2 flex -translate-y-1/2 cursor-pointer items-start rounded p-1">
            {leftIcon}
          </div>
        )}

        {rightIcon && type !== 'password' && (
          <div className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer rounded p-1">
            {rightIcon}
          </div>
        )}

        {type === 'password' && (
          <button
            type="button"
            className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer rounded p-1"
            onClick={togglePassword}
          >
            <PasswordIcon size={18} className="text-gray" />
          </button>
        )}
      </div>
      {error && !disabled && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
