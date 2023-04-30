import { ReactNode } from "react";
import AppMainShell from "../AppShell/AppShell";

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {

  return <AppMainShell>{children}</AppMainShell>;
}

export default Layout;
