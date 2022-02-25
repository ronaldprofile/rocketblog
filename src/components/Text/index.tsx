import { Container } from "./styles";

interface ITextProps {
  children: string;
  tag: string;
}

export function Text({ children, tag }: ITextProps) {
  return <Container as={tag}>{children}</Container>;
}
