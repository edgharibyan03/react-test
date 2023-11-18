/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useRef, useState } from 'react'
import { MainContext } from '../../../pages/Homepage'
import MovieSectionVideo from './MovieSectionVideo';

import { CalculateMovieDuration } from '../../../utils/dayjs';
import playIcon from '../../../assets/icons/play-solid.svg'

export default function MovieSectionInfo() {
  const { activeMovie }: any = useContext(MainContext)

  const timerId = useRef<any>(null)

  const [showVideo, setShowVideo] = useState<boolean>(false)

  useEffect(() => {
    setShowVideo(false)

    if (activeMovie.VideoUrl) {
      timerId.current = setTimeout(() => {
        setShowVideo(true)
      }, 3000);
    }

    return () => {
      clearTimeout(timerId.current)
    }
  }, [activeMovie])

  return (
    <div className="movie-section-info">
      {!showVideo ? <img
        className='movie-section-info-cover'
        src={`${import.meta.env.BASE_URL}assets/${activeMovie.CoverImage}`}
        alt="movie-img"
      /> : <MovieSectionVideo
        videoUrl={activeMovie.VideoUrl}
      />}
      <div className="movie-section-info-block">
        <div className="movie-section-info-title">
          <h2>{activeMovie.Category}</h2>
          <img src={`${import.meta.env.BASE_URL}assets/${activeMovie.TitleImage}`} />
        </div>
        <div className="movie-section-info-part">
          <span className="movie-section-info-year">{activeMovie.ReleaseYear}</span>
          <span className="movie-section-info-age">{activeMovie.MpaRating}</span>
          <span className="movie-section-info-duration">
            {Math.floor(activeMovie.Duration / 3600) > 0 && `${Math.floor(activeMovie.Duration / 3600)}h`}
            {' '}
            {CalculateMovieDuration(activeMovie.Duration)}
          </span>
        </div>
        <span className="movie-section-info-desc">{activeMovie.Description}</span>
        <div className="movie-section-info-btns">
          <button>
            <img src={playIcon} alt="playIcon" />
            Play
          </button>
          <button>More info</button>
        </div>
      </div>
    </div>
  )
}