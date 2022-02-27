import { Text } from "../Text";
import { Container } from "./styles";

interface IPostProps {
  date: string;
  imageUrl: string;
  title: string;
  description: string;
}

export function Post({ date, description, title, imageUrl }: IPostProps) {
  return (
    <Container>
      <figure>
        <img src={imageUrl} alt={"Foto do post "} />
        <figcaption>{date}</figcaption>
      </figure>

      <div>
        <Text tag="h1">{title}</Text>
        <Text tag="p">{description}</Text>
      </div>
    </Container>
  );
}
