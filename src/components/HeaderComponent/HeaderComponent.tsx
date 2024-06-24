import React from 'react';
import {NavLink} from "react-router-dom";
import styles from "./HeaderComponent.module.css"
import ThemeSwitcherComponent from "../elements/ThemeSwitcherComponent/ThemeSwitcherComponent";
import {MaterialUISwitch} from "../elements/ThemeSwitcherComponent/CustomizedSwitcher";
import {useDispatch} from "react-redux";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {switchActions} from "../../redux/slices/switcherSlice";

const HeaderComponent = () => {
    const dispatch = useAppDispatch();
    const {mode} = useAppSelector(state => state.switchSlice);
    const handleSwitcherClick = ()=>{
        dispatch(switchActions.changeMode())
    }
    console.log(mode)
    return (
        <div className={styles.Header}>

                <div className={styles.linkBox}>
                    {/*<span><NavLink to={"/"} className={({isActive})=>(isActive ? styles.navLinkActive : mode ? styles.navLinkDark : styles.navLinkLight )}>Home</NavLink></span>*/}
                    <span><NavLink to={"/movies"} className={({isActive})=>(isActive ? styles.navLinkActive : mode ? styles.navLinkDark : styles.navLinkLight )}>All Movies</NavLink></span>
                    {/*<span><NavLink to={"/genres"} className={({isActive})=>(isActive ? styles.navLinkActive : mode ? styles.navLinkDark : styles.navLinkLight )}>Genres</NavLink></span>*/}
                </div>
                <div className={styles.switcher}>
                    <MaterialUISwitch onClick={handleSwitcherClick} className={styles.switcher}/>
                </div>


        </div>
    );
};

export default HeaderComponent;
