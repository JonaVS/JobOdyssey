import { ReactNode } from "react";
import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { Provider as ReduxStoreProvider } from "react-redux";
import store from "@/store/store";
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
        <ReduxStoreProvider store={store}>{children}</ReduxStoreProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default Providers;
