import React from 'react';
import HeaderComponent from "../components/HeaderComponent/HeaderComponent";
import {Outlet} from "react-router-dom";
import styles from "./MainLayout.module.css"

const MainLayout = () => {
    return (
        <div className={styles.MainLayout}>
            <div className={styles.mainContainer}>
                <HeaderComponent/>
                <Outlet/>
            </div>

        </div>
    );
};

export default MainLayout;