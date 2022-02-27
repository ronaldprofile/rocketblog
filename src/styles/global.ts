import { globalCss } from ".";

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
    margin: "0 auto",

    "@breakpoint4": {
      padding: "0 32px"
    }
  },

  button: {
    cursor: "pointer"
  },

  a: {
    textDecoration: "none"
  }
});
