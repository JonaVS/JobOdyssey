import JobBoardForm from "@/components/JobBoardForm/JobBoardForm";
import { Button, Modal, Navbar, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconSquarePlus } from "@tabler/icons-react";
import JobBoardLinkList from "@/components/JobBoardLinkList/JobBoardLinkList";

type Props = {
  hidden: boolean;
};

function AppShellNavbar({ hidden }: Props) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={hidden}
      width={{ sm: 200, lg: 300 }}
    >
      <Title mb={10} order={5}>
        My job boards
      </Title>
      <Button
        onClick={open}
        color="violet"
        mb={10}
        leftIcon={<IconSquarePlus />}
      >
        New job board
      </Button>
      <Modal opened={opened} onClose={close} title="New job board" centered>
        <JobBoardForm />
      </Modal>
      <JobBoardLinkList />
    </Navbar>
  );
}

export default AppShellNavbar;
