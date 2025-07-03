import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const inputVariants = cva(
  "placeholder:text-grey-200 aria-invalid:bg-red-100 text-sm font-normal rounded-[8px] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border border-secondary-100",
        outline: "bg-cascading-white",
      },
      size: {
        default: "px-5 py-4 h-14.5",
        icon: "h-11 p-3",
        small: "h-11.5 py-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Input({
  className,
  type,
  variant,
  size,
  ...props
}: React.ComponentProps<"input"> & VariantProps<typeof inputVariants>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        inputVariants({
          variant,
          size,
          className,
        }),
      )}
      {...props}
    />
  );
}

export { Input };
