import { Text } from "react-native";
import { 
  Button, 
  Container, 
  ContentFooter, 
  ContentHeader, 
  ContentLanguage, 
  ContentStargazers, 
  ContentText, 
  Description, 
  Elipse, 
  Img, 
  Line, 
  TextButton, 
  Title, 
  TitleBold 
} from "./styles";
import { RepositoryModel } from "../../database/models/RepositoryModel";
import { AntDesign } from "@expo/vector-icons";
import { useTheme } from "styled-components";


interface Props {
  dataRepository: RepositoryModel;
  disabled: boolean;
  favorite: (item: RepositoryModel) => void;
}

interface PropsTitleWithBold {
  text: string;

}

export function CardRepository({ dataRepository, disabled, favorite }: Props) {
  const { colors } = useTheme();

  const handleFavorite = () => {
    favorite(dataRepository);
  };

  const TitleWithBold = ({text} : PropsTitleWithBold) => {
    const steps = text.split('/');
    return (
      <ContentText>
        <Title>{steps[0]}/</Title>
        <TitleBold>{steps[1]}</TitleBold>
      </ContentText>
    );
  };


  return (
    <Container onPress={() => {}} disabled={disabled}>
      <ContentHeader>
        <TitleWithBold text={dataRepository.full_name}/>
        <Img source={{uri: dataRepository.avatar_url }} resizeMode="contain"/>
      </ContentHeader>
      <Line />
      <Description>{dataRepository.description !== null ? dataRepository.description : "Sem descrição"}</Description>
      <ContentFooter>
        <Button onPress={handleFavorite}>
          <AntDesign name="star" color={colors.dark_yellow} size={20} />
          <TextButton>Favoritar</TextButton>
        </Button>
        
        <ContentStargazers>
          <AntDesign name="star" color={colors.dark_yellow} size={20} />
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