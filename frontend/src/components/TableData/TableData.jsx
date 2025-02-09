import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from "./TableData.module.css"
import SwapVertIcon from '@mui/icons-material/SwapVert';
import {useSelector} from "react-redux";
import selector from "../../../redux/formSlicer/selector.js";
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {useDispatch} from "react-redux";
import {formDelete} from "../../../redux/formSlicer/formSlicer.js";
import {ModalContext} from "../../context/modalContext.jsx";
import {useContext} from "react";
import {useState} from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {fetchDelete} from "../../../redux/formSlicer/api.js";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

const TableData = () => {
    const selectors = useSelector(selector.form)
    const [open, setOpen] = useState(false);
    const {handleModalOpen, handleFetch, setFormData,productId, setProductId} = useContext(ModalContext)
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        setProductId(id)
        setOpen(true);
    }

    const removeConfirm = () => {
        setProductId(null);
        setOpen(false);
    };
    const handleConfirm = () => {
        if (productId !== null) {
            dispatch(formDelete(productId)); // Удаляем элемент
            setProductId(null);
            setOpen(false);
        }
    };

    const handleEditCond = (row, id) => {
        setFormData(row);
        setProductId(id);
        handleFetch()
        handleModalOpen();
    };

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <TableContainer component={Paper}>
            <div className="modal">
                <Modal
                    open={open}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Are u sure you want to delete this product?
                        </Typography>
                        <Stack direction="row" spacing={2}>
                            <Button onClick={removeConfirm} color="secondary" sx={{
                                backgroundColor: "grey",
                            }}>Cancel</Button>
                            <Button onClick={handleConfirm} variant="contained" color="error">
                                Delete
                            </Button>
                        </Stack>
                    </Box>

                </Modal>
            </div>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead className={styles.main__table}>
                    <TableRow>
                        <TableCell align="left">ID
                            <SwapVertIcon className={styles.main__table_icon}/>
                        </TableCell>
                        <TableCell align="left">Category <SwapVertIcon
                            className={styles.main__table_icon}/></TableCell>
                        <TableCell align="left">Name <SwapVertIcon className={styles.main__table_icon}/></TableCell>
                        <TableCell align="left">Quantity <SwapVertIcon
                            className={styles.main__table_icon}/></TableCell>
                        <TableCell align="left">Price (₴) <SwapVertIcon
                            className={styles.main__table_icon}/></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {selectors.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            className={row.id % 2 !== 0 ? styles.main__table_btn_color : styles.main__table_btn}
                        >
                            <TableCell align="left" component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell align="left">{row.category}</TableCell>
                            <TableCell align="left">{row.name}</TableCell>
                            <TableCell align="left">{row.quantity}</TableCell>
                            <TableCell align="left" className={styles.main__table_component}>
                                {row.price}
                                <button onClick={() => handleEditCond(row, row.id)} className={styles.main__table_btn}>
                                    <EditIcon
                                        sx={{
                                            position: "absolute",
                                            top: 14,
                                            left: 105,
                                        }}
                                    />
                                </button>
                                <Grid item xs={8}
                                      sx={{
                                          position: "absolute",
                                          left: 145,
                                          top: 12,
                                      }}
                                >
                                    <button className={row.id % 2 !== 0 ? styles.main__table_btn_color : styles.main__table_btn} type="button" onClick={() => handleDelete(row.id)}>
                                        <DeleteIcon/>
                                    </button>
                                </Grid>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
export default TableData;