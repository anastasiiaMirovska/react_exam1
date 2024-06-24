import React from 'react';
import {NavLink} from "react-router-dom";
import styles from "./HeaderComponent.module.css"
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {switchActions} from "../../redux/slices/switcherSlice";
import UserInfoComponent from "../UserInfoComponent/UserInfoComponent";
import {MaterialUISwitch} from "../../StyledElementsMUI/StyledElementsMUI";

const HeaderComponent = () => {
    const dispatch = useAppDispatch();
    const {mode} = useAppSelector(state => state.switchSlice);
    const handleSwitcherClick = ()=>{
        dispatch(switchActions.changeMode())
    }

    return (
        <div className={styles.Header}>

            <div className={styles.linkBox}>
                <span><NavLink to={"/"}
                               className={({isActive}) => (isActive ? styles.navLinkActive : mode ? styles.navLinkDark : styles.navLinkLight)}>Home</NavLink></span>
                <span><NavLink to={"/movies"}
                               className={({isActive}) => (isActive ? styles.navLinkActive : mode ? styles.navLinkDark : styles.navLinkLight)}>All Movies</NavLink></span>
                {/*<span><NavLink to={"/genres"} className={({isActive})=>(isActive ? styles.navLinkActive : mode ? styles.navLinkDark : styles.navLinkLight )}>Genres</NavLink></span>*/}
            </div>
            <div className={styles.rightBox}>

                <MaterialUISwitch onClick={handleSwitcherClick} className={styles.rightBox}/>
                <UserInfoComponent/>
            </div>


        </div>
    );
};

export default HeaderComponent;
