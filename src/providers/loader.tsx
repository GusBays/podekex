import { createContext, useContext, useState } from "react"

export interface Loader {
    loading: boolean
    setLoading: (loading: boolean) => void
}

const LoadingContext = createContext<Loader | undefined>(undefined)

export const LoadingProvider = ({ children }: { children: React.ReactNode }) => {
    const [loading, setLoading] = useState(false);
  
    return (
      <LoadingContext.Provider value={{ loading, setLoading }}>
        {children}
      </LoadingContext.Provider>
    );
  };
  
export const useLoading = () => {
    const context = useContext(LoadingContext);
    if (!context) throw new Error("useLoading deve ser usado dentro de um LoadingProvider");
    return context;
  };