import { useAppDispatch } from "@/hooks/reduxHooks";
import { useForm, zodResolver } from "@mantine/form";
import { useState } from "react";
import { createJobBoard } from "@/store/slices/jobBoardsSlice";
import { notifications } from "@mantine/notifications";
import { NotificationType, getNotificationProps } from "@/utils/notificationProps";
import jobBoardSchema from "./validationSchema";

function useJobBoardForm(closeModal: () => void) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const dispatch = useAppDispatch();

  const form = useForm({
    initialValues: {
      name: "",
    },
    validate: zodResolver(jobBoardSchema),
    validateInputOnBlur: true,
  });

  async function handleJobBoardForm() {
    setIsSubmitting(true);
    try {
      await dispatch(createJobBoard(form.values)).unwrap();
      closeModal();
    } catch (error) {
      notifications.show(
        getNotificationProps(NotificationType.ERROR, error as string)
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return {
    form,
    handleJobBoardForm,
    isSubmitting,
  };
}

export default useJobBoardForm;