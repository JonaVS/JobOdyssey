import { useForm, zodResolver } from "@mantine/form";
import { useEffect } from "react";
import getValidationSchema from "./validationSchema";

function useAuthForm(isLogin: boolean) {

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

  useEffect(() => {
    form.clearFieldError("password");
    // if form is added to arr dependencies, infinite re-renders will occur.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogin]);

  return {
    form,
  };
}

export default useAuthForm;
