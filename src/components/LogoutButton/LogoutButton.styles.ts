import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  actionIcon: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    color:
      theme.colorScheme === "dark"
        ? theme.colors.gray[1]
        : theme.colors.gray[7],
  },
}));

export default useStyles;