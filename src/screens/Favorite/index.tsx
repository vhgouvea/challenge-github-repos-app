
import { Text } from "react-native";
import { Container, Content, ContentFlatList } from "./styles";
import { useEffect, useState } from "react";
import { CustomButton } from "../../components/CustomButton";
import { useRepositoryData } from "../../context/useRepositoryData";
import { CustomHeader } from "../../components/CustomHeader";
import { RepositoryModel } from "../../database/models/RepositoryModel";
import { CardRepository } from "../../components/CardRepository";
import { ListRepositories } from "../../components/ListRepositories";
import { TblRepository } from "../../database/tables/TblRepository";


export function Favorite() {
  const { listRepositoriesDatabase, getListRepositoriesDatabase } = useRepositoryData();

  useEffect(() => {
    function getListDatabase() {
      getListRepositoriesDatabase();

      console.log(listRepositoriesDatabase, 'listinha')
    }
    getListDatabase();
  }, [])
  
  const renderCards = ({item}: {item: RepositoryModel}) => (
    console.log(item, 'to aqui dentro'),
    <CardRepository 
      dataRepository={item} 
      disabled={true}
      favorite={() => {}}
    />
  )

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