import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  centerContainer: {
    height: "100%",
  },

  authFormContainer: {
    maxWidth: 350,
    width: "50%",
    [theme.fn.smallerThan('md')]: {
        width: "100%"
    },
  },

  title: {
    marginBottom: 40,
    textAlign: "center",
  },

  tabList: {
    marginBottom: 15,
  },

  tab: {
    width: "50%",
  },
}));

export default useStyles;
