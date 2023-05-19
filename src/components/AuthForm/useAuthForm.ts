import { useForm, zodResolver } from "@mantine/form";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { login, register } from "@/store/slices/userAuthSlice";
import { notifications } from "@mantine/notifications";
import { getNotificationProps, NotificationType } from "@/utils/notificationProps";
import getValidationSchema from "./validationSchema";

function useAuthForm(isLogin: boolean) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const router = useRouter();

  const dispatch = useAppDispatch();

  const form = useForm({
    initialValues: {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate: zodResolver(getValidationSchema(isLogin)),
    validateInputOnBlur: true,
  });

  async function handleAuthForm() {
    try {
      setIsSubmitting(true);
      if (isLogin) {
        await dispatch(login(form.values)).unwrap();
      } else {
        await dispatch(register(form.values)).unwrap();
      }
      router.push("/");
    } catch (error) {
      notifications.show(getNotificationProps(NotificationType.ERROR, error as string));
    } finally {
      setIsSubmitting(false);
    }
  }

  useEffect(() => {
    form.clearFieldError("password");
    // if form is added to arr dependencies, infinite re-renders will occur.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogin]);

  return {
    form,
    handleAuthForm,
    isSubmitting,
  };
}

export default useAuthForm;
