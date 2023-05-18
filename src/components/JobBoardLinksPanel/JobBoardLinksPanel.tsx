import { Box, Button, Modal, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconSquarePlus } from "@tabler/icons-react";
import JobBoardForm from "../JobBoardForm/JobBoardForm";
import JobBoardLinkList from "./JobBoardLinkList/JobBoardLinkList";
import useUserBoards from "./useUserBoards";

function JobBoardLinksPanel() {
  const [opened, { open, close }] = useDisclosure(false);
  const { userBoards } = useUserBoards();

  return (
    <Box w="100%">
      <Title mb={10} order={5}>
        My job boards
      </Title>
      <Button
        onClick={open}
        color="violet"
        mb={10}
        fullWidth
        leftIcon={<IconSquarePlus />}
      >
        New job board
      </Button>
      <Modal opened={opened} onClose={close} title="New job board" centered>
        <JobBoardForm />
      </Modal>
      <JobBoardLinkList userBoards={userBoards} />
    </Box>
  );
}

export default JobBoardLinksPanel;