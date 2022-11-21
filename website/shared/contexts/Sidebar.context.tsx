import { createContext, PropsWithChildren, useState } from "react";

export interface SidebarContext {
  open: boolean;
  toggle: (isOpen?: boolean) => void;
}

export const SidebarContext = createContext<SidebarContext | undefined>(
  undefined
);

export const SidebarProvider = ({ children }: PropsWithChildren<{}>) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <SidebarContext.Provider
      value={{
        open,
        toggle: () => setOpen(!open),
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
