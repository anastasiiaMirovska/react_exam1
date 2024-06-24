import React from 'react';
import {useNavigate} from "react-router-dom";

const ButtonBack = () => {
    const navigate = useNavigate();
    const handleBackClick = () => {
        const previousSearch = sessionStorage.getItem('previousSearch');
        console.log(previousSearch)
        if (previousSearch) {
            navigate(`${previousSearch}`);
        } else {
            navigate('/movies');
        }
    };
    return (
        <div>
            <button onClick={handleBackClick}>Back</button>
        </div>
    );
};

export default ButtonBack;