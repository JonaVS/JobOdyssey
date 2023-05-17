import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  dotsMenuBtn: {
    height: "100%",
    borderRadius: 0,
    border: "none",
    background:
      theme.colorScheme === "dark"
        ? theme.colors.gray[9]
        : theme.colors.gray[0],
  },
}));

export default useStyles;