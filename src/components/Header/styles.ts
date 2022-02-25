import { styled, theme } from "../../styles";

export const Container = styled("header", {
  width: "100%",
  height: 44,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
});

export const Logo = styled("a", {
  height: 37
});

export const Navigation = styled("nav");

export const Ul = styled("ul", {
  display: "flex",
  alignItems: "center",
  gap: 32,

  "& li a": {
    fontSize: 18,
    fontWeight: "bold",
    color: theme.colors.white
  }
});

export const SearchArea = styled("div", {
  height: "100%",

  "& form": {
    display: "flex",
    alignItems: "center"
  },

  "& input": {
    height: "100%",
    padding: "14px 25px",
    border: 0,

    fontSize: 14,
    background: "$darkBg",
    color: "$white",

    borderRadius: "4px 0 0 4px",

    "&::placeholder": {
      color: "$white"
    }
  },

  "& label": {
    position: "absolute",
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    borderWidth: 0
  },

  "& button": {
    height: "100%",
    padding: "10px 23px",

    background: "$buttonBg",
    border: 0,
    borderRadius: "0 4px 4px 0",
    transition: ".2s",

    "&:hover": {
      filter: "brightness(1.2)"
    }
  }
});
