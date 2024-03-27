import { DimensionValue } from "react-native";
import { Loading } from "../Loading";
import { Container, Text } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { IconProps } from "@expo/vector-icons/build/createIconSet";

interface Props {
  onPress: () => void;
  title: string;
  loading: boolean;
  width: DimensionValue;
  invertColors: boolean;
  icon?: boolean;
  nameIcon?: keyof typeof MaterialIcons.glyphMap;
  colorIcon?: string;
}

export function CustomButton({onPress, title, loading, width, invertColors, icon, nameIcon, colorIcon}: Props) {
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
        <>
        <Text invertColors={invertColors}>{title.toUpperCase()}</Text>
        {icon && (
          <MaterialIcons name={nameIcon} size={24} color={colorIcon}/>
        )}
        </>
      )}
    </Container>
  )
}