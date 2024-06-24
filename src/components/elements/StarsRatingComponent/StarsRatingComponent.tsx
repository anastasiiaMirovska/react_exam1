import React, {FC} from 'react';
import {Rating} from "@mui/material";

interface IProps{
    rating: number
}

const StarsRatingComponent:FC<IProps> = ({rating}) => {
    return (
        <div>
            <Rating name="half-rating-read" defaultValue={0} precision={0.1} max={10} size={"large"} value={rating}
                    readOnly/>
        </div>
    );
};

export default StarsRatingComponent;