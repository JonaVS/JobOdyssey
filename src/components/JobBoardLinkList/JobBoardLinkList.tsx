import useBoardSelection from "@/components/JobBoardLinkList/useBoardSelection";
import useStyles from "./JobBoardLinkList.styles";
import JobBoardLink from "./JobBoardLink/JobBoardLink";
import useUserBoards from "./useUserBoards";

function JobBoardLinkList() {
  const { classes } = useStyles();
  const { selectedIndex, handleSelectionChange } = useBoardSelection(0);
  const { userBoards } = useUserBoards();

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
