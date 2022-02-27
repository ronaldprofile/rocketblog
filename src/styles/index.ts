import { createStitches } from "@stitches/react";

export const { theme, styled, globalCss } = createStitches({
  theme: {
    colors: {
      bodyBg: "#fbf7ff",
      white: "#fff",
      purpleBg: "#290742",
      darkBg: "#170027",
      buttonBg: "#9e6dc2",

      green: "#4fff4b"
    }
  },

  media: {
    breakpoint1: "(max-width: 320px)",
    breakpoint2: "(max-width: 425px)",
    breakpoint3: "(max-width: 480px)",
    breakpoint4: "(max-width: 768px)",
    breakpoint5: "(max-width: 1024px)"
  }
});
