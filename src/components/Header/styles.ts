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

export const SearchArea = styled("div", {
  height: "100%",

  form: {
    display: "flex",
    alignItems: "center",

    label: {
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

    input: {
      height: "100%",
      padding: "14px 25px",
      border: "1px solid $darkBg",
      borderRight: 0,

      fontSize: 14,
      background: "$darkBg",
      color: "$white",

      outline: "none",
      borderRadius: "4px 0 0 4px",
      transition: ".2s",
      "&::placeholder": {
        color: "$white"
      },

      "&:focus": {
        borderColor: "$buttonBg"
      }
    },

    button: {
      height: "100%",
      padding: "10px 23px",

      background: "$buttonBg",
      border: "1px solid $buttonBg",

      borderRadius: "0 4px 4px 0",
      transition: ".2s",

      "&:hover": {
        filter: "brightness(1.2)"
      }
    }
  },

  "@breakpoint4": {
    display: "none"
  }
});

export const ActionsMenu = styled("div", {
  display: "none",

  button: {
    padding: "8px 16px",
    background: "none",
    border: 0,

    svg: {
      width: 25,
      height: 25,
      color: "$white"
    }
  },

  variants: {
    modalActive: {
      true: {
        "& .button-hamburger": {
          display: "none"
        },

        "& .button-cross": {
          display: "block"
        },

        "& nav ul": {
          height: "calc(100vh - 120px)",
          visibility: "visible",
          overflowY: "auto"
        }
      }
    }
  },

  "@breakpoint4": {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",

    "& .button-cross": {
      display: "none"
    }
  }
});

export const MenuMobile = styled("div", {
  nav: {
    display: "block",

    ul: {
      display: "block",
      position: "absolute",
      top: 120,
      right: 0,
      width: "100%",
      height: 0,
      background: "$purpleBg",
      transition: "0.6s",
      zIndex: 9999,
      visibility: "hidden",
      overflowY: "hidden",

      li: {
        padding: "16px 32px 5px",
        borderBottom: "1px solid #29292e"
      }
    }
  }
});
