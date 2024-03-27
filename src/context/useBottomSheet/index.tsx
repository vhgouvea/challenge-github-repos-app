// useAuth.tsx
import { useRepository } from '@hooks/useRepository';
import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
  useCallback,
} from 'react';

type BottomSheetContextType = {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  nameOfRepository: string;
  setNameOfRepository: (name: string) => void;
};

const BottomSheetContext = createContext<BottomSheetContextType | undefined>(undefined);

const BottomSheetProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [nameOfRepository, setNameOfRepository] = useState<string>("");


  return (
    <BottomSheetContext.Provider value={{ isOpen, setOpen, nameOfRepository, setNameOfRepository }}>
      {children}
    </BottomSheetContext.Provider>
  );

};

const useBottomSheet = () => {
  const context = useContext(BottomSheetContext);
  if (!context) {
    throw new Error('useBottomSheet deve ser usado dentro de um BottomSheetProvider');
  }
  return context;
};

export { BottomSheetProvider, useBottomSheet };