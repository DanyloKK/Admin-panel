import React, {useContext, useState} from 'react';
import {Button, Stack} from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import PreviewIcon from '@mui/icons-material/Preview';
import AddIcon from '@mui/icons-material/Add';
import styles from './HeaderFunctional.module.css';
import ModalEditForm from "../ModalEditForm/ModalEditForm.jsx"
import {useNavigate, useLocation} from 'react-router-dom';
import {ModalContext} from '../../context/modalContext.jsx';
import {useSelector} from 'react-redux';
import selector from "../../../redux/formSlicer/selector.js";

const HeaderFunctional = () => {
    const {open,handleModalClose,handleModalOpen,editData,handleFetch,handlePost} = useContext(ModalContext);
    const navigate = useNavigate();
    const hideButton = location.pathname === 'main/product';
    const handleNavigateTo = () => {
        navigate('/main/product');
    }
    const handlePostCond = () =>{
        handlePost()
        handleModalOpen();
    }
    return (
        <Stack direction="row" spacing={2} className={styles.header__block}> {!hideButton && (
            <>
                <Button
                    className={styles.header__block__btn}
                    variant="contained"
                    startIcon={<PreviewIcon/>}
                    onClick={handleNavigateTo}
                >
                    Preview
                </Button>
                <Button
                    onClick={handlePostCond}
                    className={styles.header__block__btnAdd}
                    variant="contained"
                    startIcon={<AddIcon/>}
                >
                    Add product
                </Button>
            </>
        )}
            <Modal open={open}
                   onClose={handleModalClose}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 529,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 2,
                        padding: 0,
                    }}
                >
                    <ModalEditForm  handleModalClose={handleModalClose}/>
                </Box>
            </Modal>
        </Stack>
    )
}
export default HeaderFunctional;