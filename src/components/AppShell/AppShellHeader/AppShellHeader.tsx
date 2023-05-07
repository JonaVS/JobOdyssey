import { useAppSelector } from "@/hooks/reduxHooks";
import { selectUser } from "@/store/slices/userAuthSlice";
import { Burger, Header } from "@mantine/core";
import Image from "next/image";
import { useMediaQuery } from "@mantine/hooks";
import { useRouter } from "next/router";
import ColorSchemeToggler from "@/components/ColorSchemeToggler/ColorSchemeToggler";
import useStyles from "./AppShellHeader.styles";
import logo from "../../../../public/logo.png";

type Props = {
  showMenu: () => void;
  opened: boolean;
};

function AppShellHeader({ showMenu, opened }: Props) {
  const { classes } = useStyles();
  const user = useAppSelector(selectUser);
  const isMobileView = useMediaQuery("(max-width: 768px)");
  const router = useRouter();
  const isMobileAuthPage = router.pathname.startsWith("/auth") && isMobileView;

  return (
    <Header height={{ base: 50, md: 70 }} p="md">
      <div className={classes.innerWrapper}>
        {user && <Burger
          className={classes.burgerButton}
          opened={opened}
          onClick={showMenu}
          size="sm"
        />}
        <Image
          src={logo}
          alt="Job app logo"
          width={100}
          style={{ display: isMobileAuthPage ? "none" : "block" }}
        />
        <ColorSchemeToggler />
      </div>
    </Header>
  );
}

export default AppShellHeader;
