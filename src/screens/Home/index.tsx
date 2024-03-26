import React, { useCallback, useEffect, useState } from "react";

import { Container, Content, ContentFlatList, Text } from "./styles";
import { ListRepositories } from "../../components/ListRepositories";
import { RepositoryModel } from "../../database/models/RepositoryModel";
import { CardRepository } from "../../components/CardRepository";
import { CustomHeader } from "../../components/CustomHeader";
import { useRepository } from "../../hooks/useRepository";
import { useRepositoryData } from "../../context/useRepositoryData";
import { TblRepository } from "../../database/tables/TblRepository";


export function Home() {
  const { requestDataRepository, removeRepositoryOfList, returnFilteredListRepos } = useRepository();
  const { setListRepositories, listRepositories, getListRepositoriesDatabase } = useRepositoryData();
  const [paramGetRepos, setParamGetRepos] = useState<string>("");
  
  async function getRepos() {
    try {

      const returnDataRepos = await requestDataRepository(paramGetRepos);

      
      if(returnDataRepos) {
        const returnReposListWithoutFavorities = returnFilteredListRepos(returnDataRepos);

        if(returnReposListWithoutFavorities) {
          setListRepositories(returnReposListWithoutFavorities);
        }

      }

    } catch (error) {

    }
  } 

  const handleFavorite = (item: RepositoryModel) => {
    try {
      const jsonRepositories = TblRepository.getString('tblRepository');

      const getListFavorities: RepositoryModel[] = JSON.parse(jsonRepositories || '[]');
  
      const addNewRepo = [...getListFavorities, item];

      TblRepository.set('tblRepository', JSON.stringify(addNewRepo));
  
      getListRepositoriesDatabase();

      removeRepositoryOfList(item.id)

    } catch (error) {

    }
  };


  const renderCards = ({item}: {item: RepositoryModel}) => (
    <CardRepository 
      dataRepository={item} 
      disabled={true}
      favorite={handleFavorite}
      showDetails={() => {}}
    />
  )


  return (
    <Container>
      <CustomHeader getRepos={getRepos} setParamGetRepos={setParamGetRepos} paramGetRepos={paramGetRepos}/>
      <Content>
        <ContentFlatList>
          <ListRepositories 
            data={listRepositories}
            renderItem={renderCards}
          />
        </ContentFlatList>
      </Content>
    </Container>
  )
}