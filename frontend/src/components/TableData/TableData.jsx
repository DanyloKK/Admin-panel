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

const TableData = () => {
    const selectors = useSelector(selector.form)
    const {handleModalOpen,handleFetch,setFormData,productId,setProductId} = useContext(ModalContext)
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(formDelete(id))
    }
    const handleEditCond = (row,id) => {
        setFormData(row);
        setProductId(id);
        handleFetch()
        handleModalOpen();
    };

    return (
        <TableContainer component={Paper}>
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
                        >
                            <TableCell align="left" component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell align="left">{row.category}</TableCell>
                            <TableCell align="left">{row.name}</TableCell>
                            <TableCell align="left">{row.quantity}</TableCell>
                            <TableCell align="left" className={styles.main__table_component}>
                                {row.price}
                                <button onClick={()=> handleEditCond(row,row.id)} className={styles.main__table_btn}>
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
                                    <button type="button" onClick={() => handleDelete(row.id)} className={styles.main__table_btn}>
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