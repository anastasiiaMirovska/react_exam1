import React, {FC, useEffect, useState} from 'react';
import {imageService} from "../../../services/api.service";
import styles from "./PosterPreviewComponent.module.css"

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

    let imageExists = true;
    let image:string;

    if(poster_path===null){
        imageExists = false
    }
    else{
        image = imagePath + poster_path;
    }




    return (
        <div>
            {
                imageExists ? <div><img src={image} alt="image"/><br/></div> : <div className={styles.NullImage}>No image</div>
            }

        </div>
    );
};

export default PosterPreviewComponent;