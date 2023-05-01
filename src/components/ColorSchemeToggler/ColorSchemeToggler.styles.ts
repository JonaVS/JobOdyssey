import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  actionIcon: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    color:
      theme.colorScheme === "dark"
        ? theme.colors.yellow[4]
        : theme.colors.blue[6],
  },
}));

export default useStyles;