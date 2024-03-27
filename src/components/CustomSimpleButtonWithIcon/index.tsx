import { Loading } from "../Loading";
import { Container, Content, Icon, Text } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

interface Props {
  onPress: () => void;
  title: string;
  loading: boolean;
  nameIcon: keyof typeof MaterialIcons.glyphMap;
}

export function CustomSimpleButtonWithIcon({onPress, title, loading, nameIcon}: Props) {
  return (
    <Container 
      onPress={onPress} 
      disabled={loading}
    >
      <Content>
        {loading ? (
          <Loading />
        ) : (
          <>
          <Text>{title.toUpperCase()}</Text>
          <Icon name={nameIcon}/>
          </>
        )}
      </Content>
    </Container>
  )
}