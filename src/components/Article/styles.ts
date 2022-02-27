import { styled } from "../../styles";

export const Container = styled("article", {
  position: "relative",

  marginBottom: 48,
  display: "flex",
  flexDirection: "column",
  gap: 8,
  transition: ".2s",

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

  "& span": {
    marginTop: 20,
    display: "inline-block",
    fontSize: 12,
    fontWeight: "normal"
  },

  "& a": {
    "&:hover": {
      textDecoration: "underline"
    }
  },

  "& h1": {
    fontSize: 26,
    fontWeight: "bold",
    color: "$purpleBg"
  },

  "& p": {
    fontSize: 16,
    fontWeight: "normal"
  },

  "@breakpoint3": {
    "& h1": {
      fontSize: 24
    }
  },

  "@breakpoint1": {
    "& h1": {
      fontSize: 20
    }
  }
});
