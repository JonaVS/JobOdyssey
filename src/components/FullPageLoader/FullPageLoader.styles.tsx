import { createStyles } from "@mantine/core";

const useStyles = createStyles(() => ({
  fixedContainer: {
    position: "fixed",
    zIndex: 999,
    top: 0,
    right: 0,
    width: "100%",
    height: "100vh",
  },

  innerContainer: {
    position: "relative",
    height: "100vh"
  }
}));

export default useStyles;
