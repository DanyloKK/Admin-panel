import {createContext, useState} from "react";

export const ModalContext = createContext();

export const ModalContextProvider = ({children}) => {
    const [open, setOpen] = useState(false);
    const [editData, setEditData] = useState(false);
    const [formData, setFormData] = useState({});
    const [productId, setProductId] = useState(null);
    const handleFetch = () => setEditData(true);
    const handlePost = () => setEditData(false);
    const handleModalOpen = () => setOpen(true);
    const handleModalClose = () => setOpen(false);
    return (
        <ModalContext.Provider value={{
            open,
            handleModalOpen,
            handleModalClose,
            editData,
            handleFetch,
            handlePost,
            formData,
            setFormData,
            productId,
            setProductId
        }}>
            {children}
        </ModalContext.Provider>
    )
}