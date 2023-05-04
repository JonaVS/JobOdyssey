import { Button, PasswordInput, TextInput } from "@mantine/core";
import { IconUser, IconAt, IconLock } from "@tabler/icons-react";

type Props = {
  isLogin: boolean;
};

function AuthForm({ isLogin }: Props) {
  const iconSize = "1rem";

  return (
    <form>
      {!isLogin && (
        <TextInput
          icon={<IconUser size={iconSize} />}
          placeholder="Your username"
          label="Username"
        />
      )}
      <TextInput
        icon={<IconAt size={iconSize} />}
        placeholder="user@mail.com"
        label="Email"
      />
      <PasswordInput
        icon={<IconLock size={iconSize} />}
        placeholder="Password"
        label="Password"
      />
      {!isLogin && (
        <PasswordInput
          icon={<IconLock size={iconSize} />}
          placeholder="Confirm password"
          label="Confirm password"
        />
      )}
      <Button color="indigo" fullWidth mt={20}>
        {isLogin ? "Login" : "Register"}
      </Button>
    </form>
  );
}

export default AuthForm;
