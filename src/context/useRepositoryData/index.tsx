// useAuth.tsx
import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
  useCallback,
} from 'react';

import { RepositoryModel } from '../../database/models/RepositoryModel';
import { useApi } from '../useApi';
import { IRepository } from "../../interfaces/IRepository"
import { TblRepository } from '../../database/tables/TblRepository';

type RepositoryDataContextType = {
  setListRepositories: (list: RepositoryModel[]) => void;
  listRepositories: RepositoryModel[];
  setListRepositoriesDatabase: (list: RepositoryModel[]) => void;
  listRepositoriesDatabase: RepositoryModel[];
  getListRepositoriesDatabase: () => void;
};

const RepositoryDataContext = createContext<RepositoryDataContextType | undefined>(undefined);

const RepositoryDataProvider = ({ children }: { children: ReactNode }) => {
  const [listRepositories, setListRepositories] = useState<RepositoryModel[]>([] as RepositoryModel[]);
  const [listRepositoriesDatabase, setListRepositoriesDatabase] = useState<RepositoryModel[]>([] as RepositoryModel[]);

  const getListRepositoriesDatabase = useCallback(() => {
    const jsonRepositories = TblRepository.getString("tblRepository");

      console.log(jsonRepositories, 'banco')

      if(jsonRepositories) {
        const getListFavorities: RepositoryModel[] = JSON.parse(jsonRepositories);
        console.log(getListFavorities)
        setListRepositoriesDatabase(getListFavorities);
      }
  }, [])

  const contextValues: RepositoryDataContextType = {
    listRepositories,
    setListRepositories,
    getListRepositoriesDatabase,
    listRepositoriesDatabase,
    setListRepositoriesDatabase
  };

  return <RepositoryDataContext.Provider value={contextValues}>{children}</RepositoryDataContext.Provider>;
};

const useRepositoryData = () => {
  const context = useContext(RepositoryDataContext);
  if (!context) {
    throw new Error('useRepositoryData deve ser usado dentro de um useRepositoryDataProvider');
  }
  return context;
};

export { RepositoryDataProvider, useRepositoryData };