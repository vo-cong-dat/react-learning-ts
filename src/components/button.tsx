import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap min-w-32 rounded-full shadow-button font-semibold text-base cursor-pointer',
  {
    variants: {
      color: {
        primary: 'bg-[#02044F] text-[#FCFCFD]',
        secondary: 'bg-white text-[#001524]',
        transparent: 'outline-white outline-1 text-white bg-transparent',
        default: 'text-[#111111]',
      },
      size: {
        default: 'py-3.5 px-6',
        auto: 'min-w-auto',
      },
      shape: {
        outline: 'outline-1 outline-[#D0D5DD] font-normal text-[#111111]',
      },
    },
    defaultVariants: {
      color: 'primary',
      size: 'default',
    },
  }
);

function Button({
  className,
  color,
  size,
  shape,
  asChild = false,
  children,
  icon,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    icon?: React.ReactNode;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ color, size, shape, className }))}
      {...props}
    >
      {children}
      {icon}
    </Comp>
  );
}

export { Button, buttonVariants };
