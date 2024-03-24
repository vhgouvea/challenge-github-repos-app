import React, { useState } from "react";

import { Container, ContentFlatList, Text } from "./styles";
import { CustomButton } from "../../components/CustomButton";
import { IRepository } from "../../interfaces/IRepository";
import { useRepositoryData } from "../../hooks/useRepositoryData";
import { ListRepositories } from "../../components/ListRepositories";
import { RepositoryModel } from "../../database/models/RepositoryModel";
import { CardRepository } from "../../components/CardRepository";
import { useBottomSheet } from "../../hooks/useBottomSheet";


export function Home() {
  const { requestDataRepository } = useRepositoryData();
  const [listRepos, setListRepos] = useState<RepositoryModel[]>([] as RepositoryModel[]);

  async function getRepos() {
    try {

      const returnDataRepos = await requestDataRepository('appswefit');

      if(returnDataRepos) {

        setListRepos(returnDataRepos);
        console.log('Quantidade da home:', returnDataRepos.length)
      }

    } catch (error) {

    }
  } 


  const renderCards = ({item}: {item: RepositoryModel}) => (
    console.log(item), 
    <CardRepository dataRepository={item}/>
  )


  return (
    <Container>
      <ContentFlatList>
        <ListRepositories 
          data={listRepos}
          renderItem={renderCards}
        />
      </ContentFlatList>
      <CustomButton 
        invertColors={false}
        loading={false}
        onPress={getRepos}
        title="Buscar Repos"
        width={`${100}%`}
      />
    </Container>
  )
}