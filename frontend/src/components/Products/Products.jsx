import ArticleProduct from "../ArticleProduct/ArticleProduct.jsx";
import styles from "./Products.module.css"

const Products = () =>{
    return (
        <section className={styles.products__section}>
               <ArticleProduct/>
        </section>
    )
}
export default Products