import React, {FC, useEffect, useState} from 'react';
import {imageService} from "../../services/api.service";

interface IProps{
    poster_path: string,
    poster_size: number
}


const PosterPreviewComponent:FC<IProps> = ({poster_path, poster_size}) => {
    const [imagePath, setImagePath] = useState<string>("")

    useEffect(() => {
        imageService.getImage(poster_size).then(myImagePath => {
            setImagePath(myImagePath)
        })
    }, []);

    const image = imagePath + poster_path;

    return (
        <div>
            <img src={image} alt="image"/><br/>
        </div>
    );
};

export default PosterPreviewComponent;