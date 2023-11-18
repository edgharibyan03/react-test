import MovieSectionInfo from './MovieSectionInfo'
import MovieSectionTrending from './MovieSectionTrending'
import './style.scss'

export default function MovieSection() {
  return (
    <div className='movie-section'>
      <MovieSectionInfo />
      <MovieSectionTrending />
    </div>
  )
}