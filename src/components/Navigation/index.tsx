import { Container, Ul } from "./styles";

export function Navigation() {
  return (
    <Container>
      <Ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Sobre</a>
        </li>
        <li>
          <a href="#">Categorias</a>
        </li>
        <li>
          <a href="#">Contato</a>
        </li>
      </Ul>
    </Container>
  );
}
