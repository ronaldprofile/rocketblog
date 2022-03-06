import { styled } from "../../styles";

export const Container = styled("section", {
  "& .wrapper": {
    ul: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",

      gap: 30
    },

    "@breakpoint4": {
      ul: {
        gridTemplateColumns: "1fr"
      }
    }
  }
});
