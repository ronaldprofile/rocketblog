import { globalCss } from "@stitches/react";

export const GlobalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: "Poppins, sans-serif",
    listStyle: "none"
  },

  "html, body, #root": {
    height: "100vh"
  },

  ".wrapper": {
    maxWidth: "1170px",
    margin: "0 auto"
  },

  button: {
    cursor: "pointer"
  },

  a: {
    textDecoration: "none"
  }
});
