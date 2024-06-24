const BaseURL = "https://api.themoviedb.org/3";


const urls = {
    movies:{
        discover: "/discover/movie",
        search: "/search/movie",
        movieById : (movieId:string):string => `/movie/${movieId}`
    },
    images:{
        configuration: "/configuration"
    },
    genres:{
        genresList: "/genre/movie/list"
    },

}

export{
    BaseURL,
    urls
}
