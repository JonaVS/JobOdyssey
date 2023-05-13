import {
  Box,
  LoadingOverlay,
  LoadingOverlayProps,
  Portal,
} from "@mantine/core";
import useStyles from "./FullPageLoader.styles";

type Props = Partial<LoadingOverlayProps>;

function FullPageLoader(props: Props) {

  const { classes } = useStyles();

  return (
    <Portal>
      <Box className={classes.fixedContainer} >
        <Box className={classes.innerContainer} >
          <LoadingOverlay
            loaderProps={{ color: "red", variant: "dots" }}
            visible
            {...props}
          />
        </Box>
      </Box>
    </Portal>
  );
}

export default FullPageLoader;