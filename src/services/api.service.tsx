import axios, {AxiosError} from "axios";
import {BaseURL, ImageURL, urls} from "../constants/urls";
import {IMovie} from "../Interfaces/IMovie";

const APIKey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkN2ZhOGE0YzJkMTc5N2E0Mjg4MzFlZTc5NzZmOTQ0OCIsInN1YiI6IjY2NzU4NTg2MDIyNmVlZGFhNzcxZWQ0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lRJaOsj6btPEU7AnzdVClCt8MryzHxSpq2rggbr8OR0"

const axiosInstance = axios.create({baseURL:BaseURL});

const imageAxiosInstance = axios.create({baseURL:ImageURL});

axiosInstance.interceptors.request.use(req=>{
    req.headers.Authorization = "Bearer " + APIKey;
    return req
})


const movieService = {
    async getMovies():Promise<IMovie[]>{
        const response = await axiosInstance.get(urls.movies.discover);
        return response.data.results;
    },

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


export{
    axiosInstance,
    movieService,
    imageService
}

