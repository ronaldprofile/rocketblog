import { styled } from "../../styles";

export const Container = styled("article", {
  display: "flex",
  flexDirection: "column",
  gap: 8,

  "& h1": {
    fontSize: 24,
    fontWeight: "bold",
    color: "$darkBg"
  }
});
