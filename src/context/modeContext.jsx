import { createContext, useState } from "react";

export const ModeContext = createContext();

export const ModeContextProvider = ({ children }) => {
  const [mode, setMode] = useState({ name: "lightmode", color: "#f8f9fa" });

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
};
