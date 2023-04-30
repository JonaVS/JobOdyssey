import { ReactNode } from "react";
import { AppShell } from "@mantine/core";
import { useToggle } from '@mantine/hooks';
import useStyles from "./AppShell.styles";
import AppShellHeader from "./AppShellHeader/AppShellHeader";
import AppShellNavbar from "./AppShellNavbar/AppShellNavbar";
import AppShellFooter from "./AppShellFooter/AppShellFooter";

type Props = {
  children: ReactNode;
};

function AppMainShell({ children }: Props) {
  const { classes } = useStyles();
  const [opened, toggleMenu] = useToggle()

  return (
    <AppShell
      classNames={{ main: classes.main }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      header={<AppShellHeader opened={opened} showMenu={toggleMenu} />}
      navbar={<AppShellNavbar hidden={!opened} />}
      footer={<AppShellFooter />}
    >
      {children}
    </AppShell>
  );
}

export default AppMainShell;
