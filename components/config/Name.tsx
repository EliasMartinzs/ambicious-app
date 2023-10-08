"use client";

import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const nameVariants = cva("paddings", {
  variants: {
    variant: {
      default: "",
    },
    size: {
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      xxl: "text-2xl",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "base",
  },
});

interface NameProps
  extends React.ComponentProps<"p">,
    VariantProps<typeof nameVariants> {}

const Name = React.forwardRef<HTMLHeadingElement, NameProps>(
  ({ className, size, variant, ...props }, ref) => {
    const { user } = useUser();

    return (
      <h3
        ref={ref}
        {...props}
        className={cn(nameVariants({ className, size, variant }))}
      >
        {user?.fullName}
      </h3>
    );
  }
);

export { Name, nameVariants };
