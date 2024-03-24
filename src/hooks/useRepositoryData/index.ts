import { useState } from "react"
import { IRepository } from "../../interfaces/IRepository"
import { useApi } from "../useApi";
import { RepositoryModel } from "../../database/models/RepositoryModel";



export function useRepositoryData() {
  const { apiRequest } = useApi();

  async function requestDataRepository(repository: string) {
    try {
      const listRepos: RepositoryModel[] = [];

      const { data: repositories } = await apiRequest.get<IRepository[]>(`${repository}/repos`);
  
      console.log(`Quantidade de repos da ${repository}`, repositories.length)
  
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


  return {
    requestDataRepository
  }

}