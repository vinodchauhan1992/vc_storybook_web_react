import * as React from "react";
import "../src/index.css"; // Import your global styles
import type { Preview } from "@storybook/react";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  Controls,
  Stories,
} from "@storybook/blocks";
import { ThemeProvider } from "@mui/material";
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import { customLightTheme, customDarkTheme } from "../src/themes";

const preview: Preview = {
  tags: ["autodocs"],
  decorators: [
    withThemeByDataAttribute({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
      attributeName: "data-mode",
    }),
    (Story, context) => (
      <ThemeProvider
        theme={
          context.globals.theme === "dark" ? customDarkTheme : customLightTheme
        }
      >
        <Story />
      </ThemeProvider>
    ),
  ],
  globals: {
    theme: "light", // Initial theme
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
    },
  },
};

export default preview;
