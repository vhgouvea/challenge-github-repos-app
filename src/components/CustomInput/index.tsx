import { KeyboardTypeOptions } from "react-native";
import { Container, Content } from "./styles";

interface Props {
  onChangeText:(text: string) => void;
  value: string;
  placeholder: string;
  keyboardType: KeyboardTypeOptions;
}

export function CustomInput({onChangeText, value, placeholder, keyboardType}: Props) {
  return (
    <Container>
      <Content 
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        keyboardType={keyboardType}
      />
    </Container>
  )
}