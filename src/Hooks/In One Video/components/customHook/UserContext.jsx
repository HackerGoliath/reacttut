import { createContext, useContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const userData = {
        name: "Deepak",
        age: 28
    }
    return <AppContext.Provider value={userData}>{children}</AppContext.Provider>
}

// Custom Hook
const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext }