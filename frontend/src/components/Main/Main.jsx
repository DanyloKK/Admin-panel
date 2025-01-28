
import styles from "./Main.module.css";
import {Outlet} from "react-router-dom";
import LogoType from "../Logo/Logo.jsx";
import MainUpper from "../MainUpper/MainUpper.jsx";

const Main = () => {
    return (
        <>
            <header className={styles.header}>
                <LogoType/>
                <MainUpper/>
            </header>
            <main>
                <Outlet/>
            </main>
        </>

    )
}
export default Main