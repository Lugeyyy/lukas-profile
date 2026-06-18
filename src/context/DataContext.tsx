import { createContext, useContext, type ReactNode } from "react";
import { usePortfolioData } from "../hooks/usePortfolioData";
import type { PortfolioData } from "../data";

interface DataContextType {
  data: PortfolioData | null;
  loading: boolean;
  error: string | null;
}

const DataContext = createContext<DataContextType>({
  data: null,
  loading: true,
  error: null,
});

export function useData() {
  return useContext(DataContext);
}

interface DataProviderProps {
  children: ReactNode;
}

export function DataProvider({ children }: DataProviderProps) {
  const { data, loading, error } = usePortfolioData();

  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
}
