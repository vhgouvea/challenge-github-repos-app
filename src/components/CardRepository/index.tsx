import { 
  Button, 
  Container, 
  ContentFooter, 
  ContentHeader, 
  ContentLanguage, 
  ContentStargazers,
  Description, 
  Elipse, 
  Img, 
  Line, 
  TextButton
} from "./styles";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components";

import { RepositoryModel } from "@database/models/RepositoryModel";
import { TitleWithBold } from "../TitleWithBold";


interface Props {
  dataRepository: RepositoryModel;
  disabled: boolean;
  favorite: (item: RepositoryModel) => void;
  showDetails: () => void;
}

export function CardRepository({ dataRepository, disabled, favorite, showDetails }: Props) {
  const { colors } = useTheme();

  const handleFavorite = () => {
    favorite(dataRepository);
  };

  const validateAmountOfCharacters = () => {
    if(dataRepository.description.length > 90) {
      return dataRepository.description.substring(0, 90) + "...";
    } else {
      return dataRepository.description;
    }
  }

  return (
    <Container onPress={showDetails} disabled={disabled}>
      <ContentHeader>
        <TitleWithBold text={dataRepository.full_name}/>
        <Img source={{uri: dataRepository.avatar_url }} resizeMode="contain"/>
      </ContentHeader>
      <Line />
      <Description>{dataRepository.description !== null ? validateAmountOfCharacters() : "Nenhuma descrição encontrada"}</Description>
      <ContentFooter>
        {disabled && (
          <Button onPress={handleFavorite}>
            <AntDesign name="star" color={colors.dark_yellow} size={20} />
            <TextButton>Favoritar</TextButton>
          </Button>
        )}

        <ContentStargazers>
          <MaterialIcons name="star" color={colors.dark_yellow} size={20} />
          <Description>{dataRepository.stargazers_count}</Description>
        </ContentStargazers>
        
        <ContentLanguage>
          <Elipse />
          <Description>{dataRepository.language !== null ? dataRepository.language : "N/A"}</Description>
        </ContentLanguage>
      </ContentFooter>
    </Container>
  )
}