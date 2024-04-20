import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/AppPage/App'
import './index.css'
import Navbar from './components/Page/Navbar.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter
} from "react-router-dom";
import PeliculaPage from './pages/MoviesPage/PeliculaPage.jsx'
import MoviePage from './pages/MoviePage/MoviePage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Pelicula",
    element: <PeliculaPage />,
  },
  {
    path: "/Pelicula/:movieId",
    element: <MoviePage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
