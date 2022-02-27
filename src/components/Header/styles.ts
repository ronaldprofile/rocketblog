import { styled } from "../../styles";

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

export const Navigation = styled("nav", {
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
  },

  "@breakpoint4": {
    display: "none"
  }
});
