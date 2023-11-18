/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, createContext, useCallback } from 'react'
import MovieSection from "../../components/MovieSection";
import Navbar from "../../components/Navbar";

import { MovieItem } from '../../interfaces/MovieInterfaces.js';

import movies from '../../assets/json/data.json';

export const MainContext = createContext({})

export default function Homepage() {

  const [activeMovie, setActiveMovie] = useState<MovieItem>((movies as any).Featured)

  const handleSetActiveMovie = useCallback((movieId: string) => {
    const movie = movies.TendingNow.find(item => item.Id === movieId)
    if (movie) {
      setActiveMovie(movie)
      sessionStorage.setItem('last_viewed_movie', JSON.stringify(movie))
    }
  }, [])

  return (
    <MainContext.Provider
      value={{
        activeMovie,
        handleSetActiveMovie
      }}
    >
      <div className="homepage">
        <div className="homepage-navbar">
          <Navbar />
        </div>
        <div className="homepage-section">
          <MovieSection />
        </div>
      </div>
    </MainContext.Provider>
  )
}