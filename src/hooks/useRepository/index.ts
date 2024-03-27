import { IRepository } from "@interfaces/IRepository"
import { useApi } from "@context/useApi";
import { RepositoryModel } from "@database/models/RepositoryModel";
import { useRepositoryData } from "@context/useRepositoryData";
import { TblRepository } from "@database/tables/TblRepository";
import useToast from "@hooks/useToast";



export function useRepository() {
  const { apiRequest } = useApi();
  const { showToast } = useToast();
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
      showToast("error", "Erro", `Erro ao buscar repositórios!`);
    }
  }

  function removeRepositoryOfList(id: number) {
    const newListRepos = listRepositories.filter(repo => repo.id !== id);
    setListRepositories(newListRepos);
  }

  function removeRepositoryOfListDB(id: number) {
    const newListReposDB = listRepositoriesDatabase.filter(repoDb => repoDb.id !== id);
    setListRepositoriesDatabase(newListReposDB)

  }


  function returnFilteredListRepos(list: RepositoryModel[]) {
    const jsonRepositories = TblRepository.getString('tblRepository');

    const getListDatabase: RepositoryModel[] = JSON.parse(jsonRepositories || '[]');

    const newListRepos = list.filter(repo => !getListDatabase.some(dbRepo => dbRepo.id === repo.id));

    return newListRepos;
  }

  const handleFavorite = (item: RepositoryModel) => {
    const jsonRepositories = TblRepository.getString('tblRepository');

    const getListFavorities: RepositoryModel[] = JSON.parse(jsonRepositories || '[]');

    const addNewRepo = [...getListFavorities, item];

    TblRepository.set('tblRepository', JSON.stringify(addNewRepo));

    getListRepositoriesDatabase();

    removeRepositoryOfList(item.id)
  };

  const handleUnfavorite = (item: RepositoryModel) => {
    const jsonRepositories = TblRepository.getString('tblRepository');

    const listRepositoriesDB: RepositoryModel[] = JSON.parse(jsonRepositories || '[]');

    const filteredListDB = listRepositoriesDB.filter(repo => repo.id !== item.id);

    TblRepository.set('tblRepository', JSON.stringify(filteredListDB));

    const newListRepositories = [...listRepositories, item];

    setListRepositories(newListRepositories);

    getListRepositoriesDatabase();

    removeRepositoryOfListDB(item.id);
  };



  return {
    requestDataRepository,
    removeRepositoryOfList,
    returnFilteredListRepos,
    handleFavorite,
    handleUnfavorite
  }

}