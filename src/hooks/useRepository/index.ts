import { useState } from "react"
import { IRepository } from "../../interfaces/IRepository"
import { useApi } from "../../context/useApi";
import { RepositoryModel } from "../../database/models/RepositoryModel";
import { useRepositoryData } from "../../context/useRepositoryData";



export function useRepository() {
  const { apiRequest } = useApi();
  const { listRepositories, setListRepositories } = useRepositoryData();

  async function requestDataRepository(repository: string) {
    try {
      const listRepos: RepositoryModel[] = [];

      const { data: repositories } = await apiRequest.get<IRepository[]>(`${repository}/repos`);
  
      for(const repository of repositories) {
  
        const repos: RepositoryModel = {
          id: repository.id,
          full_name: repository.full_name,
          description: repository.description,
          avatar_url: repository.owner.avatar_url,
          stargazers_count: repository.stargazers_count,
          language: repository.language,
          html_url: repository.html_url
        }
  

        listRepos.push(repos)
      }

      return listRepos;

    } catch (error) {

    }
  }

  function removeRepositoryOfList(id: number) {
    const index = listRepositories.findIndex(repo => repo.id === id);

    if(index !== -1) {
      const newListRepos = [...listRepositories];
      
      newListRepos.splice(index, 1);

      setListRepositories(newListRepos);
    }
  }

  function addRepositoryOfList(id: number) {

  }


  return {
    requestDataRepository,
    removeRepositoryOfList,
    addRepositoryOfList
  }

}