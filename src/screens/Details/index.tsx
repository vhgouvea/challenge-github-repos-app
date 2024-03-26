import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../routes/stack.routes";
import { Container, Content, ContentElipse, ContentFooter, ContentTitle, Description, DescriptionElipse, Elipse, Title, TitleBold } from "./styles";
import { CustomButton } from "../../components/CustomButton";
import { Linking } from "react-native";
import { useTheme } from "styled-components";


type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Detalhes'>;

interface DetailsProps {
  route: DetailsScreenRouteProp;
}
export function Details({ route }: DetailsProps) {
  const { colors } = useTheme();
  console.log(route, 'route')

  const steps = route.params.repository.full_name.split('/');

  async function navigateToRepository() {
    await Linking.openURL(route.params.repository.html_url);
  }

  return (
    <Container>
      <Content>
        <ContentTitle>
          <Title>{steps[0]}/</Title>
          <TitleBold>{steps[1]}</TitleBold>
        </ContentTitle>
        <Description>{route.params.repository.description != null ? route.params.repository.description : "Nenhuma descrição encontrada"}</Description>
        <ContentElipse>
          <Elipse />
          <DescriptionElipse>{route.params.repository.language != null ? route.params.repository.language : "N/A"}</DescriptionElipse>
        </ContentElipse>
      </Content>
      <ContentFooter>
        <CustomButton 
          invertColors
          loading={false}
          onPress={navigateToRepository}
          title="Ver Repositório"
          width={`${100}%`}
          icon
          nameIcon="insert-link"
          colorIcon={colors.custom_blue}
        />
      </ContentFooter>
    </Container>
  )
}