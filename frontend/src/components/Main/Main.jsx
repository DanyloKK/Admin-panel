import styles from "./Main.module.css";
import {Outlet} from "react-router-dom";
import LogoType from "../Logo/Logo.jsx";
import MainUpper from "../MainUpper/MainUpper.jsx";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {fetchData} from "../../../redux/formSlicer/formSlicer.js";

const Main = () => {
    const dispatch = useDispatch()
    const loadData = () =>{
        dispatch(fetchData())
        console.log("Data")
    }
    useEffect(()=>{
        loadData()
    },[])
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