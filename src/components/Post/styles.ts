import { styled } from "../../styles";

export const Container = styled("article", {
  display: "flex",
  flexDirection: "column",
  gap: 8,

  "& h1": {
    fontSize: 26,
    fontWeight: "bold",
    color: "$darkBg"
  },

  "@breakpoint4": {
    flexDirection: "row",
    gap: 48,

    "& figure": {
      "& img": {
        width: 300
      },

      "& figcaption": {
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

    "& h1": {
      fontSize: 22
    }
  },

  "@breakpoint1": {
    "& figure": {
      "& img": {
        width: 250
      }
    },

    "& h1": {
      fontSize: 20
    }
  }
});
