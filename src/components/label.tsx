"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cn } from "@/utils/cn";

interface ILabelProps extends React.ComponentProps<typeof LabelPrimitive.Root> {
  isRequired?: boolean;
}

function Label({ className, isRequired, children, ...props }: ILabelProps) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "text-secondary-100 text-lg leading-none font-semibold",
        "flex items-center gap-2",
        "group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50",
        "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className,
      )}
      {...props}
    >
      {children}
      {isRequired && "*"}
    </LabelPrimitive.Root>
  );
}

export { Label };
