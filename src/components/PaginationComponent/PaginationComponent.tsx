import React from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {useSearchParams} from "react-router-dom";
import {movieActions} from "../../redux/slices/moviesSlice";
import {movieService} from "../../services/api.service";
import {stringify} from "node:querystring";

const PaginationComponent = () => {

    const {page, total_pages} = useAppSelector(state => state.moviesSlice);
    const dispatch = useAppDispatch();

    const changePage = (action:string)=>{
        let myPage = page;
        switch(action){
            case "previous":
                if(myPage>1){
                    dispatch(movieActions.changePage(myPage-1));
                }
                break
            case "next":
                if(myPage<total_pages){
                    dispatch(movieActions.changePage(myPage+1));
                }
                break;
        }

    }

    return (
        <div>
            // Стрілочки вправо вліво
            <button onClick={()=>changePage("previous")}>Previous</button>
            <span>{page}</span>
            <button onClick={()=>changePage("next")}>Next</button>
        </div>
    );
};

export default PaginationComponent;