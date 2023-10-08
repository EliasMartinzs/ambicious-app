"use client";

import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";
import { SignOutButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";

const userVariants = cva("flex flex-row gap-x-2", {
  variants: {
    variant: {
      start: "flex item-center text-center justify-start",
      center: "flex item-center justify-center",
      end: "flex item-center justify-end",
    },
    size: {
      sm: "w-48 h-full",
      lg: "w-64 h-full",
      wFull: "w-full h-full",
    },
    sizeText: {
      default: "text-base",
      sm: "text-sm",
      lg: "text-lg",
      xl: "text-xl",
    },
  },
  defaultVariants: {
    variant: "start",
    size: "sm",
    sizeText: "default",
  },
});

interface UserProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof userVariants> {}

const User = React.forwardRef<HTMLDivElement, UserProps>(
  ({ className, variant, size, sizeText, ...props }, ref) => {
    const { user } = useUser();
    const router = useRouter();

    const userInfo = {
      fullname: user?.fullName || "",
      image: user?.imageUrl || "",
    };

    return (
      <div
        className={cn(userVariants({ variant, size, className, sizeText }))}
        ref={ref}
        {...props}
      >
        <Image
          src={userInfo.image}
          width={70}
          height={70}
          alt={userInfo.fullname}
          className="object-cover object-center saturate-200 rounded-full"
        />
        <div className="flex flex-col items-start justify-center">
          <h3>{userInfo.fullname}</h3>
          <SignOutButton signOutCallback={() => router.push("/")}>
            Sair
          </SignOutButton>
        </div>
      </div>
    );
  }
);

export { User, userVariants };
