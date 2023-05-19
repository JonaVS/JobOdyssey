import { Box, Button, Modal, Title } from "@mantine/core";
import { IconSquarePlus } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import useUserBoards from "./useUserBoards";
import JobBoardLinksPanelSkeleton from "./JobBoardLinksPanelSkeleton/JobBoardLinksPanelSkeleton";
import ActionRetry from "../ActionRetry/ActionRetry";
import JobBoardForm from "../JobBoardForm/JobBoardForm";
import JobBoardLinkList from "./JobBoardLinkList/JobBoardLinkList";

function JobBoardLinksPanel() {
  const [opened, { open, close }] = useDisclosure(false);
  const { isLoading, userBoards, error, fetchUserBoards } = useUserBoards();

  if (!error && isLoading) return <JobBoardLinksPanelSkeleton />

  if (error)
    return (
      <ActionRetry
        message="Unable to get job boards"
        isLoading={isLoading}
        retryFn={fetchUserBoards}
      />
    );

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
        <JobBoardForm closeModalFn={close} />
      </Modal>
      <JobBoardLinkList userBoards={userBoards} />
    </Box>
  );
}

export default JobBoardLinksPanel;
