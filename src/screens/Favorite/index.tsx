import { useCallback, useEffect } from "react";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { 
  Container, 
  Content, 
  ContentFlatList
} from "./styles";

import { useRepositoryData } from "@context/useRepositoryData";
import { CustomHeader } from "@components/CustomHeader";
import { CardRepository } from "@components/CardRepository";
import { ListRepositories } from "@components/ListRepositories";
import { RepositoryModel } from "@database/models/RepositoryModel";


export function Favorite() {
  const { navigate }: NavigationProp<ParamListBase> = useNavigation();
  const { listRepositoriesDatabase, getListRepositoriesDatabase } = useRepositoryData();

  useEffect(() => {
    getListRepositoriesDatabase();
  }, [])

  function navigateToDetails(repository: RepositoryModel) {
    navigate('Detalhes', { repository: repository });
  }

  const renderCards =  useCallback(({item}: {item: RepositoryModel}) => { 
    return(
      <CardRepository 
        dataRepository={item} 
        disabled={false}
        favorite={() => {}}
        showDetails={() => {navigateToDetails(item)}}
      />
  )}, []);

  return (
    <Container>
      <CustomHeader getRepos={() => {}} setParamGetRepos={() => {}} paramGetRepos={""}/>
      <Content>
        <ContentFlatList>
          <ListRepositories 
            data={listRepositoriesDatabase}
            renderItem={renderCards}
          />
        </ContentFlatList>
      </Content>
    </Container>
  )
}