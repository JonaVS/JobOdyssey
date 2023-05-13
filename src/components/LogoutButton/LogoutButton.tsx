import { ActionIcon } from "@mantine/core";
import { IconLogout } from "@tabler/icons-react";
import useLogout from "@/hooks/useLogout";
import useStyles from "./LogoutButton.styles";
import FullPageLoader from "../FullPageLoader/FullPageLoader";

function LogoutButton() {
  const { classes } = useStyles();
  const { isLoading, handleLogout } = useLogout();

  return (
    <>
      <ActionIcon
        onClick={() => handleLogout()}
        className={classes.actionIcon}
        size="lg"
      >
        <IconLogout size="1.2rem" />
      </ActionIcon>
      {isLoading && <FullPageLoader overlayBlur={6}/>}
    </>
  );
}

export default LogoutButton;
