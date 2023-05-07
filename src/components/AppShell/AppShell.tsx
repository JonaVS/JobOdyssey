import { ReactNode } from "react";
import { AppShell } from "@mantine/core";
import { useToggle } from '@mantine/hooks';
import { useAppSelector } from "@/hooks/reduxHooks";
import { selectUser } from "@/store/slices/userAuthSlice";
import AppShellHeader from "./AppShellHeader/AppShellHeader";
import AppShellNavbar from "./AppShellNavbar/AppShellNavbar";
import AppShellFooter from "./AppShellFooter/AppShellFooter";
import useStyles from "./AppShell.styles";

type Props = {
  children: ReactNode;
};

function AppMainShell({ children }: Props) {
  const user = useAppSelector(selectUser);
  const { classes } = useStyles();
  const [opened, toggleMenu] = useToggle()

  return (
    <AppShell
      classNames={{ main: classes.main }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      header={<AppShellHeader opened={opened} showMenu={toggleMenu} />}
      navbar={user ? <AppShellNavbar hidden={!opened} /> : <div/>}
      footer={<AppShellFooter />}
    >
      {children}
    </AppShell>
  );
}

export default AppMainShell;
