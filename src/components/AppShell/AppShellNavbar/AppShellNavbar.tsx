import { Navbar, Text } from "@mantine/core";

type Props = {
  hidden: boolean;
};

function AppShellNavbar({ hidden }: Props) {
  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={hidden}
      width={{ sm: 200, lg: 300 }}
    >
      <Text>Job boards will go here</Text>
    </Navbar>
  );
}

export default AppShellNavbar;
