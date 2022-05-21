import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppContextWrapper = ({ children }) => {
  const [greatGrandFatherAmount, setGreatGrandFatherAmount] = useState(0);

  let sharedState = {
    greatGrandFatherAmount,
    setGreatGrandFatherAmount,
  };
  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
};

export function useAppContext() {
  return useContext(AppContext);
}
