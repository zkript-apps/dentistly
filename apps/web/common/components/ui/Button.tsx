import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/common/helpers/cn";
import { Slot } from "@radix-ui/react-slot";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-900 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm",
        primary:
          "text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm",
        danger:
          "focus:outline-none text-white bg-error-500 hover:bg-error-600 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm",
        warning:
          "focus:outline-none text-white bg-warning-500 hover:bg-warning-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm",
        success:
          "focus:outline-none text-white bg-success-600 hover:bg-success-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm",
        outline:
          "border border-blue-600 bg-transparent hover:bg-blue-600 hover:text-white",
        secondary:
          "focus:outline-none text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm",
        ghost: "text-black",
        link: "text-text-500 underline-offset-4 hover:underline",
        shaded:
          "border border-text-200 text-text-500 bg-transparent hover:bg-text-50 hover:bg-opacity-50",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  imagePosition?: Position;
  icon?: React.ReactNode;
}
enum Position {
  "end",
  "start",
}
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      children,
      icon,
      imagePosition,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {imagePosition === Position.start ? icon : null}
        {children}
        {imagePosition === Position.end ? icon : null}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
