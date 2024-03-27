import { useState } from "react"
import { IRepository } from "../../interfaces/IRepository"
import { useApi } from "../../context/useApi";
import { RepositoryModel } from "../../database/models/RepositoryModel";
import { useRepositoryData } from "../../context/useRepositoryData";
import { TblRepository } from "../../database/tables/TblRepository";



export function useRepository() {
  const { apiRequest } = useApi();
  const { listRepositories, setListRepositories, setListRepositoriesDatabase, listRepositoriesDatabase, getListRepositoriesDatabase } = useRepositoryData();

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
    console.log(id, 'id adicionado')
    const newListRepos = listRepositories.filter(repo => repo.id !== id);

    setListRepositories(newListRepos);
  }

  function removeRepositoryOfListDB(id: number) {
    console.log(id, 'id que adicionei')

    const newListReposDB = listRepositoriesDatabase.filter(repoDb => repoDb.id !== id);

    setListRepositoriesDatabase(newListReposDB)

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

  const handleFavorite = (item: RepositoryModel) => {
    try {
      console.log('fui chamado "CardRepos 2"')
      const jsonRepositories = TblRepository.getString('tblRepository');

      const getListFavorities: RepositoryModel[] = JSON.parse(jsonRepositories || '[]');
  
      const addNewRepo = [...getListFavorities, item];

      TblRepository.set('tblRepository', JSON.stringify(addNewRepo));
  
      getListRepositoriesDatabase();

      removeRepositoryOfList(item.id)
      console.log('fui chamado "CardRepos 3"')

    } catch (error) {

    }
  };

  const handleUnfavorite = (item: RepositoryModel) => {
    try {
    // Buscar os registros salvos na TblRepository
    const jsonRepositories = TblRepository.getString('tblRepository');

    const listRepositoriesDB: RepositoryModel[] = JSON.parse(jsonRepositories || '[]');

    // Remover o item da lista de registros
    const filteredListDB = listRepositoriesDB.filter(repo => repo.id !== item.id);

    // Atualizar a TblRepository com a lista filtrada em formato de string JSON
    TblRepository.set('tblRepository', JSON.stringify(filteredListDB));

    // // // Remover o item da lista de registros
    // const filteredList = listRepositories.filter(repo => repo.id !== item.id);

    // Adicionar novamente o item à lista de registros
    const newListRepositories = [...listRepositories, item];

    setListRepositories(newListRepositories);

    getListRepositoriesDatabase();

    removeRepositoryOfListDB(item.id);

  
      console.log('Item removido e lista atualizada com sucesso:', item);
    } catch (error) {
      console.error('Erro ao remover item e atualizar lista:', error);
    }
  };



  return {
    requestDataRepository,
    removeRepositoryOfList,
    returnFilteredListRepos,
    handleFavorite,
    handleUnfavorite
  }

}