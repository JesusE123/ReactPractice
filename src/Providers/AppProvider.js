import { createContext, useState, useContext } from "react"
const AppContext = createContext();

const AppProvider = ({children}) => {
  const [theme, setTheme] = useState('light');
  const themesToggle = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  const ObjectValues = {theme, themesToggle};
  return (
    <AppContext.Provider value={ObjectValues}>
      {children}
    </AppContext.Provider>
  )
}
const useAppContext = () => {
  const lmp = useContext(AppContext);
  return lmp;
}

export {AppProvider, useAppContext};