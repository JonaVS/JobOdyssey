import { Button, Center, Container, Text } from "@mantine/core";
import { IconReload } from "@tabler/icons-react";

type Props = {
  retryFn: () => void,
  isLoading: boolean,
  message: string
};

function ActionRetry({ retryFn, isLoading, message }: Props) {
  return (
    <Center h="100%">
      <Container sx={{ textAlign: "center" }}>
        <Text size={14} mb={2}>
          {message}
        </Text>
        <Button
          onClick={retryFn}
          color="gray"
          leftIcon={<IconReload size="1.2rem" />}
          loading={isLoading}
        >
          Retry
        </Button>
      </Container>
    </Center>
  );
}

export default ActionRetry;