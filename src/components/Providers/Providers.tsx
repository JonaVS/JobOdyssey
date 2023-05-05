import { ReactNode } from "react";
import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import useColorSchemeConfig from "@/hooks/useColorSchemeConfig";

type Props = {
  children: ReactNode;
};

function Providers({ children }: Props) {
  const { colorScheme, toggleColorScheme } = useColorSchemeConfig();

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default Providers;
