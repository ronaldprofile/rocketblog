import { Header } from "../../components/Header";
import * as H from "./styles";

export function Home() {
  return (
    <H.Container>
      <H.Background>
        <H.Wrapper>
          <Header />
        </H.Wrapper>
      </H.Background>
    </H.Container>
  );
}
