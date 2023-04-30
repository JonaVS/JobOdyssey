import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  main: {
    background:
      theme.colorScheme === "dark"
        ? theme.colors.dark[8]
        : theme.colors.gray[2],
  },
}));

export default useStyles;