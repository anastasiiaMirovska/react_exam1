import axios, {AxiosError, AxiosResponse} from "axios";
import {BaseURL, urls} from "../constants/urls";
import {IMovie} from "../Interfaces/IMovie";
import {IGenre} from "../Interfaces/IGenre";
import {IMovieResponse} from "../Interfaces/IMovieResponse";
import {IGetMovies} from "../Interfaces/IGetMovies";
import {IMovieDetails} from "../Interfaces/IMovieDetails";

const BearerToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkN2ZhOGE0YzJkMTc5N2E0Mjg4MzFlZTc5NzZmOTQ0OCIsInN1YiI6IjY2NzU4NTg2MDIyNmVlZGFhNzcxZWQ0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lRJaOsj6btPEU7AnzdVClCt8MryzHxSpq2rggbr8OR0"

const axiosInstance = axios.create({baseURL:BaseURL});


axiosInstance.interceptors.request.use(req=>{
    req.headers.Authorization = "Bearer " + BearerToken;
    return req
})

const movieService = {
    async getMovies({page, with_genres, filmName}:IGetMovies):Promise<IMovieResponse>{
        let response;
        if(with_genres){
            response = await axiosInstance.get<IMovieResponse>(urls.movies.discover, {params:{page:page, with_genres: with_genres}});
        }
        else if(filmName){
            response = await axiosInstance.get<IMovieResponse>(urls.movies.search, {params:{page:page, query: filmName}});
        }
        else{
            response = await axiosInstance.get<IMovieResponse>(urls.movies.discover, {params:{page:page}});
        }
        return response.data;
    },


    async getMovieById (id:string):Promise<IMovieDetails>{
        const response = await axiosInstance.get(urls.movies.movieById(id));
        console.log(id);
        console.log(response.data)
        return response.data
    }

}

const imageService = {
    async getImage(mySize:number):Promise<string>{
        const configuration = await axiosInstance.get(urls.images.configuration);
        const base_url = configuration.data.images.secure_base_url;

        const poster_sizes:string[] = configuration.data.images.poster_sizes;
        let size;
        if(mySize >= poster_sizes.length){
            size = 1;
        }
        else{
            size = mySize
        }
        return base_url +"/"+ poster_sizes[size];
    }
}

const genreService = {
    async getGenres():Promise<IGenre[]>{
        const genres = await axiosInstance.get(urls.genres.genresList);
        return genres.data.genres
    }
}

export{
    axiosInstance,
    movieService,
    imageService,
    genreService
}

