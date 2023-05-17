import { Menu, ActionIcon } from "@mantine/core";
import { IconDotsVertical, IconEdit, IconTrash } from "@tabler/icons-react";
import useStyles from "./JobBoardLinkActions.styles";

function JobBoardLinkActions() {
  const { classes } = useStyles();

  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <ActionIcon className={classes.dotsMenuBtn}>
          <IconDotsVertical size={16} />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Board actions</Menu.Label>
        <Menu.Item icon={<IconEdit size={14} />}>Edit</Menu.Item>
        <Menu.Item color="red" icon={<IconTrash size={14} />}>Delete</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export default JobBoardLinkActions;