"use client";

import { ChakraProviderProps } from "@/app/providers/types/provider.type";
import { ChakraProvider, ThemeConfig, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const themeConfig: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

// https://chakra-ui.com/docs/styled-system/global-styles
const styles = {
  global: (props: any) => ({
    body: {
      bg: mode("#E8EFEB", "#343434")(props),
    },
  }),
};

const theme = extendTheme({
  styles,
  themeConfig,
  fonts: { heading: `'Open Sans', sans-serif`, body: `'Raleway', sans-serif` },
});

export const Providers = ({ children }: ChakraProviderProps) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
