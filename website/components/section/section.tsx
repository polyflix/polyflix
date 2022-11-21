import { PropsWithChildren } from "react";
import cn from "classnames";

type SectionProps = {
  className?: string;
  id?: string;
  maxWidth?: boolean;
};

export const Section = ({
  children,
  className,
  maxWidth = true,
  id,
}: PropsWithChildren<SectionProps>) => {
  return (
    <section
      id={id}
      className={cn(
        "flex flex-col justify-center p-4 mx-auto mb-52",
        maxWidth && "max-w-7xl",
        className
      )}
    >
      {children}
    </section>
  );
};
