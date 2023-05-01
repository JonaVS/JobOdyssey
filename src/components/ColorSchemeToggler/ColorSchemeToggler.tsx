import { useMantineColorScheme, ActionIcon, Group } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";
import useStyles from "./ColorSchemeToggler.styles";

function ColorSchemeToggler() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { classes } = useStyles();

  return (
    <Group position="center" my="xl">
      <ActionIcon
        onClick={() => toggleColorScheme()}
        size="lg"
        className={classes.actionIcon}
      >
        {colorScheme === "dark" ? (
          <IconSun size="1.2rem" />
        ) : (
          <IconMoonStars size="1.2rem" />
        )}
      </ActionIcon>
    </Group>
  );
}
export default ColorSchemeToggler;