import { styled } from "../../styles";

export const Container = styled("nav", {
  "@breakpoint4": {
    display: "none"
  }
});

export const Ul = styled("ul", {
  display: "flex",
  alignItems: "center",
  gap: 32,

  "& li a": {
    position: "relative",
    fontSize: 18,
    fontWeight: "bold",
    color: "$white",
    transition: ".2s",

    "&::after": {
      content: "",
      position: "absolute",
      width: 0,
      height: 4,
      bottom: -5,
      left: 0,
      background: "$white",
      transition: "width .2s"
    },

    "&:hover": {
      "&::after": {
        width: "100%"
      }
    }
  }
});
