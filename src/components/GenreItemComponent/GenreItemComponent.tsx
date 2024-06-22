import React, {FC} from 'react';
import {IGenre} from "../../Interfaces/IGenre";
import {useNavigate} from "react-router-dom";

interface IProps{
    genre:IGenre
}

const GenreItemComponent:FC<IProps> = ({genre}) => {
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={()=>navigate(genre.name)}>{genre.name}</button>
        </div>
    );
};

export default GenreItemComponent;