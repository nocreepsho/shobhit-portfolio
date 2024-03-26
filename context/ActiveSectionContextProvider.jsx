"use client";

import { useState, createContext, useContext } from "react";

export const ActiveSectionContext = createContext(null);

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error("useActiveSectionContext must be used within an ActiveSectionContextProvider");
  }
  return context;

}

const ActiveSectionContextProvider = ({ children }) => {

  const [activeSection, setActiveSection] = useState("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0); //To disable observer for 1 second after clicking a link

  return (
    <ActiveSectionContext.Provider value={{ 
      activeSection, 
      setActiveSection,
      timeOfLastClick,
      setTimeOfLastClick
    }}>
      {children}
    </ActiveSectionContext.Provider>
  )
}

export default ActiveSectionContextProvider