import { useState } from "react"
import { IRepository } from "../../interfaces/IRepository"
import { useApi } from "../../context/useApi";
import { RepositoryModel } from "../../database/models/RepositoryModel";
import { useRepositoryData } from "../../context/useRepositoryData";
import { TblRepository } from "../../database/tables/TblRepository";



export function useRepository() {
  const { apiRequest } = useApi();
  const { listRepositories, setListRepositories } = useRepositoryData();

  async function requestDataRepository(repository: string) {
    try {

      const { data: repositories } = await apiRequest.get<IRepository[]>(`${repository}/repos`);
      
      const listRepos: RepositoryModel[] = repositories.map(repository => {
        return {
          id: repository.id,
          full_name: repository.full_name,
          description: repository.description,
          avatar_url: repository.owner.avatar_url,
          stargazers_count: repository.stargazers_count,
          language: repository.language,
          html_url: repository.html_url
        }
      });
  
      return listRepos;

    } catch (error) {

    }
  }

  function removeRepositoryOfList(id: number) {

    const newListRepos = listRepositories.filter(repo => repo.id !== id);

    setListRepositories(newListRepos);
  }

  function addRepositoryOfList(id: number) {
    
  }

  function returnFilteredListRepos(list: RepositoryModel[]) {
    try {
      const jsonRepositories = TblRepository.getString('tblRepository');

      const getListDatabase: RepositoryModel[] = JSON.parse(jsonRepositories || '[]');
  

      const newListRepos = list.filter(repo => !getListDatabase.some(dbRepo => dbRepo.id === repo.id));
  

      return newListRepos;
    } catch (error) {
      console.error('Erro ao filtrar repositórios:', error);
    }
  }


  return {
    requestDataRepository,
    removeRepositoryOfList,
    addRepositoryOfList,
    returnFilteredListRepos
  }

}