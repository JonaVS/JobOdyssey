import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  innerWrapper: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    justifyContent: "space-between"
  },

  burgerButton: {
    color: theme.colors.gray[6],
    marginRight: theme.spacing.xl,
    [theme.fn.largerThan('sm')]: {
      display: "none"
    },
  }
}));

export default useStyles;
