import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from "./TableData.module.css"
import SwapVertIcon from '@mui/icons-material/SwapVert';


const TableData = () => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead className={styles.main__table}>
                    <TableRow>
                        <TableCell>ID <SwapVertIcon className={styles.main__table_icon}/></TableCell>
                        <TableCell align="right">Category <SwapVertIcon
                            className={styles.main__table_icon}/></TableCell>
                        <TableCell align="right">Name <SwapVertIcon className={styles.main__table_icon}/></TableCell>
                        <TableCell align="right">Quantity <SwapVertIcon
                            className={styles.main__table_icon}/></TableCell>
                        <TableCell align="right">Price (₴) <SwapVertIcon className={styles.main__table_icon}/></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                </TableBody>
            </Table>
        </TableContainer>
    )
}
export default TableData;