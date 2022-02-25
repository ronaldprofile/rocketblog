import { styled } from "../../styles";

export const Container = styled("article", {
  marginBottom: 48,
  display: "flex",
  flexDirection: "column",
  gap: 8,

  "& span": {
    fontWeight: "normal"
  },

  "& a": {
    "&:hover": {
      textDecoration: "underline"
    }
  },

  "& h1": {
    fontSize: 24,
    fontWeight: "bold",
    color: "$purpleBg"
  },
  "& p": {
    fontSize: 16,
    fontWeight: "normal"
  }
});
