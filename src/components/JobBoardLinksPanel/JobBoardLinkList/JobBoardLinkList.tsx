import { JobBoard } from "@/models/jobBoard/jobBoardModels";
import useBoardSelection from "./useBoardSelection";
import useStyles from "./JobBoardLinkList.styles";
import JobBoardLink from "./JobBoardLink/JobBoardLink";

type Props = {
  userBoards: JobBoard[];
};

function JobBoardLinkList({ userBoards }: Props) {
  const { classes } = useStyles();
  const { selectedIndex, handleSelectionChange } = useBoardSelection(0);

  return (
    <ol className={classes.boardLinkList}>
      {userBoards.map((board, index) => (
        <JobBoardLink
          active={index === selectedIndex}
          onClick={() => handleSelectionChange(index)}
          key={board.id}
          label={board.name}
        />
      ))}
    </ol>
  );
}

export default JobBoardLinkList;
