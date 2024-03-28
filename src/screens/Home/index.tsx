import React from "react";

import { Container, ContentFlatList } from "./styles";
import { ListRepositories } from "@components/ListRepositories";
import { RepositoryModel } from "@database/models/RepositoryModel";
import { CardRepository } from "@components/CardRepository";
import { useRepository } from "@hooks/useRepository";
import { useRepositoryData } from "@context/useRepositoryData";


export function Home() {
  const { handleFavorite } = useRepository();
  const { listRepositories } = useRepositoryData();
  

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
      <ContentFlatList>
        <ListRepositories 
          data={listRepositories}
          renderItem={renderCards}
        />
      </ContentFlatList>
    </Container>
  )
}