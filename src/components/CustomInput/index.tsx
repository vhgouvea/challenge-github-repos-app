import { KeyboardTypeOptions } from "react-native";
import { Container, Content, Label } from "./styles";

interface Props {
  onChangeText:(text: string) => void;
  value: string;
  placeholder: string;
  keyboardType: KeyboardTypeOptions;
}

export function CustomInput({onChangeText, value, placeholder, keyboardType}: Props) {
  return (
    <Container>
      <Label>Nome do usuário</Label>
      <Content 
        onChangeText={onChangeText}
        value={value}
        keyboardType={keyboardType}
      />
    </Container>
  )
}