import { useEffect } from "react";
import { useForm, zodResolver } from "@mantine/form";
import { Button, PasswordInput, TextInput } from "@mantine/core";
import { IconUser, IconAt, IconLock } from "@tabler/icons-react";
import getValidationSchema from "./validationSchema";

type Props = {
  isLogin: boolean;
};

function AuthForm({ isLogin }: Props) {
  const iconSize = "1rem";

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
    if(isLogin)form.clearFieldError("password");
    // if form is added, infinite re-renders will occur.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogin]);

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      {!isLogin && (
        <TextInput
          icon={<IconUser size={iconSize} />}
          placeholder="John Wick"
          label="Display name"
          {...form.getInputProps("displayName")}
        />
      )}
      <TextInput
        icon={<IconAt size={iconSize} />}
        placeholder="user@mail.com"
        label="Email"
        {...form.getInputProps("email")}
      />
      <PasswordInput
        icon={<IconLock size={iconSize} />}
        placeholder="Password"
        label="Password"
        {...form.getInputProps("password")}
      />
      {!isLogin && (
        <PasswordInput
          icon={<IconLock size={iconSize} />}
          placeholder="Confirm password"
          label="Confirm password"
          {...form.getInputProps("confirmPassword")}
        />
      )}
      <Button type="submit" color="indigo" fullWidth mt={20}>
        {isLogin ? "Login" : "Register"}
      </Button>
    </form>
  );
}

export default AuthForm;
