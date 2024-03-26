import { DimensionValue } from "react-native";
import { Loading } from "../Loading";
import { Container, Content, Icon, Text } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { IconProps } from "@expo/vector-icons/build/createIconSet";

interface Props {
  onPress: () => void;
  title: string;
  loading: boolean;
  invertColors: boolean;
  nameIcon: keyof typeof MaterialIcons.glyphMap;
}

export function CustomButtonWithIcon({onPress, title, loading, invertColors, nameIcon}: Props) {
  return (
    <Container 
      onPress={onPress} 
      disabled={loading}
      invertColors={invertColors}
    >
      <Content>
        {loading ? (
          <Loading />
        ) : (
          <>
          <Text invertColors={invertColors}>{title.toUpperCase()}</Text>
          <Icon name={nameIcon} invertColors={invertColors}/>
          </>
        )}
      </Content>
    </Container>
  )
}