import { Burger, Header, Text } from "@mantine/core";
import useStyles from "./AppShellHeader.styles";

type Props = {
  showMenu: () => void;
  opened: boolean;
};

function AppShellHeader({ showMenu, opened }: Props) {
  const { classes } = useStyles();

  return (
    <Header height={{ base: 50, md: 70 }} p="md">
      <div className={classes.innerWrapper}>
        <Burger
          className={classes.burgerButton}
          opened={opened}
          onClick={showMenu}
          size="sm"
        />
        <Text fw="bolder">Brand</Text>
      </div>
    </Header>
  );
}

export default AppShellHeader;
