import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openSidebar = () => {
        setIsSideBarOpen(true);
    }

    const closeSidebar = () => {
        setIsSideBarOpen(false);
    }

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    return (
        <AppContext.Provider
            value={{ isSideBarOpen, isModalOpen, openSidebar, closeSidebar, openModal, closeModal }}
        >
            {children}
        </AppContext.Provider>
    )
}

// custom hook, which can we use globally
export const useGlobalContext = () =>{
    return useContext(AppContext);
}; 