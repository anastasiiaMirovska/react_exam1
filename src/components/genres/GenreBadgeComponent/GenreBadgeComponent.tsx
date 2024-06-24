import React, {FC} from 'react';
import {IGenre} from "../../../Interfaces/IGenre";
import {Badge} from "@mui/material";


interface IProps{
    genres: IGenre[]
}

const GenreBadgeComponent:FC<IProps> = ({genres}) => {
    return (
        <div>
            {genres.map((genre, index) => (
                <Badge key={index} badgeContent={genre.name} color="secondary" sx={ {marginTop: index* 6, whiteSpace: 'nowrap' }}/>
            ))}
        </div>
    );
};

export default GenreBadgeComponent;