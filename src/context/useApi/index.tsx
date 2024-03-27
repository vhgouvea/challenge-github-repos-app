// useAuth.tsx
import React, {
  createContext,
  useContext,
  ReactNode
} from 'react';
import axios, { AxiosInstance } from 'axios';

type ApiContextType = {
  apiRequest: AxiosInstance;
};

const ApiContext = createContext<ApiContextType | undefined>(undefined);

const ApiProvider = ({ children }: { children: ReactNode }) => {

  const apiRequest = axios.create({
    baseURL: 'https://api.github.com/users/',

    headers: {
      'Content-Type': 'application/json'
    },
  });
  

  const contextValues: ApiContextType = {
    apiRequest
  };

  return <ApiContext.Provider value={contextValues}>{children}</ApiContext.Provider>;
};

const useApi = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error('useApi deve ser usado dentro de um ApiProvider');
  }
  return context;
};

export { ApiProvider, useApi };