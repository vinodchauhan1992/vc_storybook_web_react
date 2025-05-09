import * as React from "react";
import "../src/index.css"; // Import your global styles
import "../src/styles/global-styles.css";
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

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      sort: "requiredFirst",
    },

    docs: {
      controls: {
        sort: "requiredFirst",
      },
    },

    backgrounds: {
      default: "Auto",
      values: [
        { name: "Auto", value: "var(--vc-color-bg-canvas)" },
        {
          name: "Transparent",
          value:
            "repeat conic-gradient(#666 90deg, #aaa 90deg 180deg, #666 180deg 270deg, #aaa 270deg) 0 0 / 32px 32px",
        },
        { name: "White", value: "var(--vc-color-bg-white-canvas)" },
        { name: "Black", value: "var(--vc-color-bg-black-canvas)" },
      ],
    },

    options: {
      storySort: {
        method: "alphabetical",
        order: ["docs", ["Overview"], "Foundations", "Components"],
      },
    },
  },

  globalTypes: {
    colorMode: {
      description: `VCComponent theme's color mode option`,
      defaultValue: "Light",
      toolbar: {
        title: "Color Mode",
        items: ["Light", "Dark"],
        dynamicTitle: true,
      },
    },
    subBrand: {
      description: `VCComponent theme's sub brand option`,
      defaultValue: "VCComponent",
      toolbar: {
        title: "Sub brand",
        items: ["VCComponent", "VCComponent Save"],
        dynamicTitle: true,
      },
    },
  },

  decorators: [
    (story, context) => {
      document.body.classList.toggle(
        "vc-theme-main--light",
        context.globals.subBrand === "VCComponent" &&
          context.globals.colorMode === "Light"
      );
      document.body.classList.toggle(
        "vc-theme-main--dark",
        context.globals.subBrand === "VCComponent" &&
          context.globals.colorMode === "Dark"
      );
      document.body.classList.toggle(
        "vc-theme-save--light",
        context.globals.subBrand === "VCComponent Save"
      );

      return story();
    },
  ],
};

export default preview;
