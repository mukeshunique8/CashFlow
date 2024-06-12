import React, { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [showAddTrans, setShowAddTrans] = useState(false);

  return (
    <AppContext.Provider value={{ showAddTrans, setShowAddTrans }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

