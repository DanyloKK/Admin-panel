import LogoMain from "../../assets/img/main-logo.svg"
import styles from "./Logo.module.css";
const LogoType = () => (
    <div className={styles.header__logo__block}>
        <img src={LogoMain} alt="Rozetka-logo"/>
    </div>
)
export default LogoType
