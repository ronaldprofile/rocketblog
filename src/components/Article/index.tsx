import { Text } from "../Text";
import { Container } from "./styles";

interface IArticleProps {
  date: string;
  title: string;
  description: string;
}

export function Article({ date, description, title }: IArticleProps) {
  return (
    <Container>
      <span>{date}</span>

      <a href="#">
        <Text tag="h1">{title}</Text>
      </a>

      <Text tag="p">{description}</Text>
    </Container>
  );
}
