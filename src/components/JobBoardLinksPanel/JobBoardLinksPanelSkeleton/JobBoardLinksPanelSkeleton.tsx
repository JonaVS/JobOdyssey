import { Skeleton, Stack } from "@mantine/core";

function JobBoardLinksPanelSkeleton() {
  return (
    <Stack spacing="xs">
      <Skeleton height={20} width={120} />
      {Array.from({ length: 4 }, (_, index) => (
        <Skeleton key={index} height={40} />
      ))}
    </Stack>
  );
}

export default JobBoardLinksPanelSkeleton;