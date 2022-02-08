import { createContext, useState } from "react";

const LenguageState = createContext();

const intiLanguage = "es";

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(intiLanguage);
  const data = { language, setLanguage };
  return (
    <LenguageState.Provider value={data}>{children}</LenguageState.Provider>
  );
};

export { LanguageProvider };

export default LenguageState;
