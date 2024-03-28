import React, { useEffect, useState } from "react";

import { Container, ContentFlatList } from "./styles";
import { ListRepositories } from "@components/ListRepositories";
import { RepositoryModel } from "@database/models/RepositoryModel";
import { CardRepository } from "@components/CardRepository";
import { CustomHeader } from "@components/CustomHeader";
import { useRepository } from "@hooks/useRepository";
import { useRepositoryData } from "@context/useRepositoryData";
import { CustomBottomSheet } from "@components/CustomBottomSheet";
import { useBottomSheet } from "@context/useBottomSheet";


export function Home() {
  const { isOpen } = useBottomSheet();
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
      {isOpen && <CustomBottomSheet />}
    </Container>
  )
}