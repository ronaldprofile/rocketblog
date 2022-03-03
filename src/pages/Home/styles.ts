import { styled } from "../../styles";

export const Container = styled("div", {
  height: "100vh"
});

export const Background = styled("div", {
  width: "100%",
  height: "100%",
  background: "$purpleBg",
  borderBottom: "6px solid $green"
});

export const Wrapper = styled("div", {
  maxWidth: "1170px",
  height: "100%",
  margin: "0 auto",
  paddingTop: 64,

  "@breakpoint4": {
    paddingLeft: 32,
    paddingRight: 32
  }
});

export const Emphasis = styled("section", {
  height: "100%",
  display: "flex",
  alignItems: "center",
  gap: 30,

  "& .content": {
    h1: {
      fontSize: 36,
      fontWeight: "bold",
      color: "$buttonBg"
    },

    p: {
      margin: "16px 0 24px",
      fontSize: 18,
      fontWeight: "normal",
      color: "$bodyBg"
    },

    a: {
      maxWidth: 200,
      padding: "12px 0",

      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,

      fontSize: 18,
      fontWeight: "bold",
      textTransform: "uppercase",
      background: "$buttonBg",
      color: "$white",
      borderRadius: "9999px",

      transition: ".2s",
      "&:hover": {
        filter: "brightness(0.9)"
      }
    }
  },

  // 768px
  "@breakpoint4": {
    margin: "64px 0 64px",

    flexDirection: "column",
    alignItems: "flex-start",

    "& .content": {
      order: 2,
      h1: {
        fontSize: 30
      }
    }
  },

  // 480px
  "@breakpoint3": {
    "& .content": {
      h1: {
        fontSize: 24
      },
      p: {
        fontSize: 16
      },

      a: {
        padding: "10px 0",
        fontSize: 16
      }
    },

    "& .image-post": {
      "& img": {
        width: 400
      }
    }
  },

  // 425px
  "@breakpoint2": {
    "& .image-post": {
      "& img": {
        width: 300
      }
    }
  },

  // 320px
  "@breakpoint1": {
    "& .content": {
      h1: {
        fontSize: 20
      }
    },

    "& .image-post": {
      "& img": {
        width: 250
      }
    }
  }
});

export const Main = styled("main", {
  marginTop: 64,

  "& > div": {
    marginBottom: 64,

    "& .wrapper": {
      display: "flex",
      justifyContent: "space-between",
      gap: 130,

      "& section": {
        maxWidth: 560,
        "& a": {
          "&:hover": {
            textDecoration: "underline"
          }
        },

        "& h1": {
          margin: "16px 0",
          color: "$purpleBg",
          fontSize: 24,
          fontWeight: "bold"
        },
        "& p": {
          fontSize: 16,
          fontWeight: "normal"
        }
      }
    }
  },

  "@breakpoint4": {
    "& > div": {
      "& .wrapper": {
        flexDirection: "column",
        gap: 100
      }
    }
  },

  "@breakpoint3": {
    "& > div": {
      "& .wrapper": {
        "& section": {
          "& figure img": {
            width: 300
          }
        }
      }
    }
  },

  "@breakpoint1": {
    "& > div": {
      "& .wrapper": {
        "& section": {
          "& figure img": {
            width: 250
          },

          "& h1": {
            fontSize: 20
          }
        }
      }
    }
  }
});
