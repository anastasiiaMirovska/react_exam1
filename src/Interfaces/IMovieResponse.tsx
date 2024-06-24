import {IMovie} from "./IMovie";

export interface IMovieResponse{
    page: number,
    results:IMovie[],
    total_pages: number,
    total_results: number
}
