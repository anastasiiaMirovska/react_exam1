import React from 'react';
import HeaderComponent from "../components/HeaderComponent/HeaderComponent";
import {Outlet} from "react-router-dom";
import styles from "./MainLayout.module.css"
import {useAppSelector} from "../hooks/reduxHooks";

const MainLayout = () => {
    const {mode} = useAppSelector(state => state.switchSlice);
    return (
        <div className={mode ? styles.MainLayoutDark : styles.MainLayoutLight}>
            <div className={styles.mainContainer}>
                <HeaderComponent/>
                <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;
