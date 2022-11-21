import { ElementType, PropsWithChildren } from "react";
import cn from "classnames";

type ButtonProps<T extends ElementType> = {
  as?: T;
  className?: string;
};

export const GradientTitle = <T extends ElementType = "h2">({
  as,
  children,
  className,
  ...props
}: PropsWithChildren<ButtonProps<T>>) => {
  const Component = as || "h2";

  return (
    <Component
      className={cn(
        "bg-clip-text text-transparent bg-gradient-to-r from-poly-red/40 to-poly-red",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
