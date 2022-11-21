import { useContext } from "react";
import { SidebarContext } from "../contexts/Sidebar.context";

export const useSidebar = (): SidebarContext => {
  const context = useContext<SidebarContext | undefined>(SidebarContext);
  if (!context) {
    throw new Error(
      "Missing provider. useSidebar can only be used inside SidebarProvider."
    );
  }
  return context;
};
