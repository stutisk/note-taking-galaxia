import { createContext, useContext } from "react";
import { useState } from "react";

const ModalContext = createContext({});

const useModal = () => useContext(ModalContext);

const ModalProvider = ({ children }) => {
    const [isModal,setIsModal]= useState(false);
    const [selectedNote,setSelectednote]=useState()

  return (
    <ModalContext.Provider value={{ isModal,setIsModal,selectedNote,setSelectednote }}>
      {children}
    </ModalContext.Provider>
  );
};
export { ModalProvider, useModal };