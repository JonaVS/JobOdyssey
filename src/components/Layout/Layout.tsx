import { ReactNode } from "react";
import useAuthStatus from "@/hooks/useAuthStatus";
import FullPageLoader from "../FullPageLoader/FullPageLoader";
import AppMainShell from "../AppShell/AppShell";

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {
  const { isLoading } = useAuthStatus();

  if (isLoading) {
    return <FullPageLoader />;
  }

  return <AppMainShell>{children}</AppMainShell>;
}

export default Layout;
