import React from 'react';
import {IconButton} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const UserInfoComponent = () => {
    return (
        <div>
            <IconButton size={"medium"}>
                <AccountCircleIcon fontSize={"large"}/>
            </IconButton>
            <span>Міровська Анастасія</span>
        </div>
    );
};

export default UserInfoComponent;