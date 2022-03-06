import { styled } from "../../styles";

export const Container = styled("article", {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: 8,

  "&::after": {
    content: "",
    position: "absolute",
    bottom: -8,
    left: 0,
    height: 2,
    width: 0,
    background: "$purpleBg",
    transition: "width .2s"
  },

  "&:hover": {
    "&::after": {
      width: "100%"
    }
  },

  h1: {
    fontSize: 26,
    fontWeight: "bold",
    color: "$darkBg"
  },

  a: {
    "&:hover": {
      textDecoration: "underline"
    }
  },

  "@breakpoint4": {
    flexDirection: "row",
    gap: 48,

    figure: {
      img: {
        width: 300
      },

      figcaption: {
        position: "absolute",
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        borderWidth: 0
      }
    }
  },

  "@breakpoint3": {
    flexDirection: "column",
    gap: 8,

    h1: {
      fontSize: 22
    }
  },

  "@breakpoint1": {
    figure: {
      img: {
        width: 250
      }
    },

    h1: {
      fontSize: 20
    }
  }
});
