import { Button, TextInput } from "@mantine/core";
import useJobBoardForm from "./useJobBoardForm";

type Props = {
  closeModalFn: () => void;
}

function JobBoardForm({ closeModalFn }: Props) {
  const { form, handleJobBoardForm, isSubmitting } = useJobBoardForm(closeModalFn);

  return (
    <form onSubmit={form.onSubmit(handleJobBoardForm)}>
      <TextInput
        placeholder="Space traveller job hunt"
        label="Board name"
        {...form.getInputProps("name")}
      />
      <Button loading={isSubmitting} mt={5} fullWidth type="submit" color="violet">
        Create
      </Button>
    </form>
  );
}

export default JobBoardForm;