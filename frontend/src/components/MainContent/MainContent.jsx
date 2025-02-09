import styles from "./MainContent.module.css"
import TableData from "../TableData/TableData.jsx";
import {getUser} from "../../../redux/formSlicer/authReducer.js";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

const MainContent = () =>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getUser())
    },[])
    return (
        <section>
            <div className={styles.main__content_block}>
               <h1 className={styles.main__content_title}>Products</h1>
                <TableData />
            </div>
        </section>
    )
}
export default MainContent