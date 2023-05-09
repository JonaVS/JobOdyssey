import { Button, PasswordInput, TextInput } from "@mantine/core";
import { IconUser, IconAt, IconLock } from "@tabler/icons-react";
import useAuthForm from "./useAuthForm";

type Props = {
  isLogin: boolean;
};

function AuthForm({ isLogin }: Props) {
  const iconSize = "1rem";

  const { form, handleAuthForm } = useAuthForm(isLogin)
  
  return (
    <form onSubmit={form.onSubmit(handleAuthForm)}>
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
