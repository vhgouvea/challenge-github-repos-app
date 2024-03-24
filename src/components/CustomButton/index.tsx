import { DimensionValue } from "react-native";
import { Loading } from "../Loading";
import { Container, Text } from "./styles";

interface Props {
  onPress: () => void;
  title: string;
  loading: boolean;
  width: DimensionValue;
  invertColors: boolean;
}

export function CustomButton({onPress, title, loading, width, invertColors}: Props) {
  return (
    <Container 
      style={{width: width}} 
      onPress={onPress} 
      disabled={loading}
      invertColors={invertColors}
    >
      {loading ? (
        <Loading />
      ) : (
        <Text invertColors={invertColors}>{title.toUpperCase()}</Text>
      )}
    </Container>
  )
}