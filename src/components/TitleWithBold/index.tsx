import { Container, Title, TitleBold } from "./styles";

interface Props {
  text: string;
}
export function TitleWithBold({ text }: Props) {
  
  const steps = text.split('/');

  return (
    <Container>
      <Title>{steps[0]}/</Title>
      <TitleBold>{steps[1]}</TitleBold>
    </Container>
  );
}