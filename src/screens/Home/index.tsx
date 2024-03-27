import React, { useState } from "react";

import { Container, Content, ContentFlatList } from "./styles";
import { ListRepositories } from "@components/ListRepositories";
import { RepositoryModel } from "@database/models/RepositoryModel";
import { CardRepository } from "@components/CardRepository";
import { CustomHeader } from "@components/CustomHeader";
import { useRepository } from "@hooks/useRepository";
import { useRepositoryData } from "@context/useRepositoryData";


export function Home() {
  const { requestDataRepository, handleFavorite, returnFilteredListRepos } = useRepository();
  const { setListRepositories, listRepositories } = useRepositoryData();
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