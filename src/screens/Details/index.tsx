import { useCallback, useState } from "react";
import { Linking } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { 
  Container, 
  Content, 
  ContentElipse, 
  ContentFooter, 
  ContentTitle, 
  Description, 
  DescriptionElipse, 
  Elipse, 
  Title, 
  TitleBold 
} from "./styles";

import { RootStackParamList } from "@routes/stack.routes";
import { CustomButtonWithIcon } from "@components/CustomButtonWithIcon";
import { CustomSimpleButtonWithIcon } from "@components/CustomSimpleButtonWithIcon";
import { useRepository } from "@hooks/useRepository";


type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Detalhes'>;

interface DetailsProps {
  route: DetailsScreenRouteProp;
}
export function Details({ route }: DetailsProps) {
  const { handleFavorite, handleUnfavorite } = useRepository();
  const [favorite, setFavorite] = useState<boolean>(true);

  const steps = route.params.repository.full_name.split('/');

  async function navigateToRepository() {
    await Linking.openURL(route.params.repository.html_url);
  }

  const handleFavoriteRepository = useCallback(() => {

    if(!favorite) {
      handleFavorite(route.params.repository);
    } else {
      handleUnfavorite(route.params.repository);
    }

  }, [favorite])


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
        <CustomButtonWithIcon 
          invertColors
          loading={false}
          onPress={navigateToRepository}
          title="Ver Repositório"
          nameIcon="insert-link"
        />
        {favorite ? (
          <CustomSimpleButtonWithIcon 
            loading={false}
            onPress={() => {
              setFavorite(!favorite),
              handleFavoriteRepository()
            }}
            title="Desfavoritar"
            nameIcon="star-border"
          />
        ) : (
          <CustomButtonWithIcon 
            invertColors={false}
            loading={false}
            onPress={() => {
              setFavorite(!favorite),
              handleFavoriteRepository()
            }}
            title="Favoritar"
            nameIcon="star"
          />
        )}
      </ContentFooter>
    </Container>
  )
}