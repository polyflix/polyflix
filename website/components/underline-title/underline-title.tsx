import { PropsWithChildren } from "react";

export const UnderlineTitle = ({ children }: PropsWithChildren<{}>) => {
  return (
    <h2 className="text-2xl mb-8 max-w-content relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-12 after:bg-gradient-to-r after:from-poly-red/40 after:to-poly-red after:rounded">
      {children}
    </h2>
  );
};
