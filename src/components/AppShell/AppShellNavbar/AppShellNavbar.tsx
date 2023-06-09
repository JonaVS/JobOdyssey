import { Navbar } from "@mantine/core";
import JobBoardLinksPanel from "@/components/JobBoardLinksPanel/JobBoardLinksPanel";

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
      <JobBoardLinksPanel />
    </Navbar>
  );
}

export default AppShellNavbar;