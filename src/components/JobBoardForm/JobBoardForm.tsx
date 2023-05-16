import { Button, TextInput } from "@mantine/core";

function JobBoardForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <TextInput
        placeholder="Space traveller job hunt"
        label="Board name"
      />
      <Button mt={5} fullWidth type="submit" color="violet">
        Create
      </Button>
    </form>
  );
}

export default JobBoardForm;