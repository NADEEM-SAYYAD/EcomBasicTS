import { createContext, useContext, useState } from "react";
import { PropTypes, ModalContextType } from "./modal.types";

const ModalContext = createContext<ModalContextType>({} as ModalContextType);

const ModalContextProvider = ({ children }: PropTypes) => {
    const [show, setShow] = useState<boolean>(false);

    const handleModalClose = () => setShow(false);
    const handleModalShow = () => setShow(true);

    return (
        <ModalContext.Provider
            value={{ show, handleModalClose, handleModalShow }}
        >
            {children}
        </ModalContext.Provider>
    );
};

const useModalHook = () => useContext(ModalContext);
export { useModalHook, ModalContextProvider };
