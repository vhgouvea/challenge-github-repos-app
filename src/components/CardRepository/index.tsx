import { Text } from "react-native";
import { Container } from "./styles";
import { RepositoryModel } from "../../database/models/RepositoryModel";


interface Props {
  dataRepository: RepositoryModel;
}

export function CardRepository({ dataRepository }: Props) {

  console.log('TO NO CARD REPOSITORY', dataRepository.full_name)

  return (
    <Container>
      <Text>{dataRepository.full_name}</Text>
    </Container>
  )
}