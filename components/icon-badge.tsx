import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

import { IconType } from "react-icons";

const backgroundVariants = cva("rounded-full flex item-center justify-center", {
  variants: {
    variant: {
      default: "bg-sky-100",
      succes: "bg-emerald-100",
    },
    iconVariant: {
      default: "text-sky-700",
      succes: "text-emerald-700",
    },
    size: {
      default: "p-2",
      sm: "p-1",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});
const iconVariants = cva("", {
  variants: {
    variant: {
      default: "text-sky-700",
      succes: "text-emerald-700",
    },

    size: {
      default: "h-8 w-8",
      sm: "h-4 w-4",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type BackgroundVariantsProps = VariantProps<typeof backgroundVariants>;
type IconVariantsProps = VariantProps<typeof iconVariants>;

export interface IconBadgeProps
  extends BackgroundVariantsProps,
    IconVariantsProps {
  icon: IconType;
  bgVariants?: boolean
}

export const IconBadge = ({ icon: Icon, variant, size, bgVariants }: IconBadgeProps) => {
  return (
    <div className={cn(  bgVariants && backgroundVariants({ variant, size }))}>
      <Icon className={cn(iconVariants({ variant, size }))}></Icon>
    </div>
  );
};
