import { NavLink } from "@mantine/core";
import { IconChalkboard } from "@tabler/icons-react";
import JobBoardLinkActions from "./JobBoardLinkActions/JobBoardLinkActions";
import useStyles from "./JobBoardLink.styles";

type Props = {
  active: boolean;
  label: string,
  onClick: () => void 
};

function JobBoardLink({ active, label: name, onClick }: Props) {
  const { classes } = useStyles();

  return (
    <li className={classes.listItem}>
      <NavLink
        onClick={onClick}
        icon={<IconChalkboard size="1.3rem" />}
        label={name}
        variant="light"
        color="gray"
        active={active}
      />
      {active && <JobBoardLinkActions />}
    </li>
  );
}

export default JobBoardLink;
