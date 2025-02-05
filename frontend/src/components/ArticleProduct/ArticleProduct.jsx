import {useSelector} from "react-redux";
import selector from "../../../redux/formSlicer/selector.js";
import styles from "./ArticleProduct.module.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ArticleProduct = () => {
    const dataSelector = useSelector(selector.form)

    return (
        <div className={styles.products__container}>
            {dataSelector.map((product) => (
                <article className={styles.products__article} key={product.id}>
                    <div className={styles.products__imgBlock}>
                        <img className={styles.products__img} src={product.image} alt={product.name}/>
                    </div>
                    <h4 className={styles.products__title}>Laptop {product.name}</h4>
                    <div className={styles.products__textBlock}>
                        <span className={styles.products__text}>{product.price}
                            <span className={styles.products__textPrices}>₴</span>
                        </span>
                        <span className={styles.products__textPrice}>Quantity:{product.quantity}</span>
                    </div>
                    <p className={styles.products__lower_text}>
                        <ShoppingCartIcon
                            sx={{
                                color:"green",
                                position:"absolute",
                                display:"inline-block",
                                left:37,
                            }}
                        />
                        Ready for delivery
                    </p>
                </article>
            ))}
        </div>
    );
};

export default ArticleProduct;