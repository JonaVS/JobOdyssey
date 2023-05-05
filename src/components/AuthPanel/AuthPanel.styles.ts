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

  logo: {
    width: 120,
    height: "auto",
    display: "block",
    margin: "0px auto 30px auto"
  }

}));

export default useStyles;
