import {createBrowserRouter, Navigate, RouteObject} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import MoviesPage from "../pages/MoviesPage/MoviesPage";
import GenresPage from "../pages/GenresPage/GenresPage";
import HomePage from "../pages/HomePage/HomePage";


const routes:RouteObject[] = [
    {path:"", element: <MainLayout/>, children:[
            {index:true, element: <HomePage/>},
            {path:"/movies", element:<MoviesPage/>},
            {path:"/genres", element:<GenresPage/>}

        ]}
]

const router = createBrowserRouter(routes);

export default  router