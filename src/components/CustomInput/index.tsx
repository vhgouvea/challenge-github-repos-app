import { DimensionValue, KeyboardTypeOptions } from "react-native";
import { Loading } from "../Loading";
import { Container } from "./styles";

interface Props {
  onChangeText:(text: string) => void;
  value: string;
  placeholder: string;
  keyboardType: KeyboardTypeOptions;
}

export function CustomInput({onChangeText, value, placeholder, keyboardType}: Props) {
  return (
    <Container
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
      keyboardType={keyboardType}
    /> 
  )
}