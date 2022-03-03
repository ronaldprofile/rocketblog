import { styled } from "../../styles";

export const Container = styled("section", {
  "& .wrapper": {
    ul: {
      display: "flex",
      alignItems: "center",

      gap: 30
    },

    "@breakpoint4": {
      ul: {
        flexDirection: "column"
      }
    }
  }
});
