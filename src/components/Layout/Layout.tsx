import { ReactNode } from "react";
import { Box, LoadingOverlay } from "@mantine/core";
import useAuthStatus from "@/hooks/useAuthStatus";
import AppMainShell from "../AppShell/AppShell";

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {
  const { isLoading } = useAuthStatus();

  if (isLoading) {
    return (
      <Box h="100vh" pos="relative">
        <LoadingOverlay loaderProps={{color: "red", variant: "dots"}} visible/>
      </Box>
    );
  }

  return <AppMainShell>{children}</AppMainShell>;
}

export default Layout;
