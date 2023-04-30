import {
  Burger,
  Header,
  MediaQuery,
  Text,
  useMantineTheme,
} from "@mantine/core";

type Props = {
  showMenu: () => void
  opened: boolean;
};

function AppShellHeader({ showMenu, opened }: Props) {

  const theme = useMantineTheme();

  return (
    <Header height={{ base: 50, md: 70 }} p="md">
      <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            opened={opened}
            onClick={showMenu}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>
        <Text fw="bolder">Brand</Text>
      </div>
    </Header>
  );
}

export default AppShellHeader;
