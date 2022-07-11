import React, { useState } from "react";

const PexelsContext = React.createContext({});

export function PexelsContextProvaider({ children }) {
  const [globalPexels, setGlobalPexels] = useState([]);

  return (
    <PexelsContext.Provider value={{ globalPexels, setGlobalPexels }}>
      {children}
    </PexelsContext.Provider>
  );
}
export default PexelsContext;
