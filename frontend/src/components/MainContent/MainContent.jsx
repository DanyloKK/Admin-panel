import styles from "./MainContent.module.css"
import TableData from "../TableData/TableData.jsx";
const MainContent = () =>{
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