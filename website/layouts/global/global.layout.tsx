import Head from "next/head";
import { PropsWithChildren } from "react";
import { Footer } from "../../components/footer/footer.component";
import { Header } from "../../components/header/header.component";
import { Sidebar } from "../../components/sidebar/sidebar.component";
import { SidebarProvider } from "../../shared/contexts/Sidebar.context";

type GlobalLayoutProps = {};

export const GlobalLayout = ({
  children,
}: PropsWithChildren<GlobalLayoutProps>) => {
  return (
    <SidebarProvider>
      <Header />
      <Sidebar />
      <main>{children}</main>
      <Footer />
    </SidebarProvider>
  );
};
