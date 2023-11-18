/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { MainContext } from '../../../pages/Homepage';

import movies from '../../../assets/json/data.json'

import 'swiper/css';
import { customSort } from '../../../utils/arrays';

export default function MovieSectionTrending() {

  const { handleSetActiveMovie }: any = useContext(MainContext)

  const [moviesList, setMoviesList] = useState(movies)

  useEffect(() => {
    if (sessionStorage.getItem('last_viewed_movie')) {
      const lastViewedMovie: string = JSON.parse(sessionStorage.getItem('last_viewed_movie') || '')

      if (lastViewedMovie) {
        setMoviesList(customSort(moviesList.TendingNow, lastViewedMovie))
      }
    }
  }, [])

  return (
    <div className="movie-section-trending">
      <h2>Trending Now</h2>
      <div className="movie-section-trending-slide">
        <div className="swiper">
          <div className="swiper-wrapper">
            <Swiper
              spaceBetween={30}
              slidesPerView={8}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {
                movies.TendingNow.map(item => (
                  <SwiperSlide
                    key={item.Id}
                  >
                    <img
                      onClick={() => handleSetActiveMovie(item.Id)}
                      src={`${import.meta.env.BASE_URL}assets/${item.CoverImage}`}
                    />
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}