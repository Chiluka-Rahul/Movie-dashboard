import {Link} from 'react-router-dom'
import './index.css'

const PopularMoviesItem = props => {
  const {movieDetails} = props
  const {id, title, imageUrl, ratings} = movieDetails
  const IMAGE_URL = 'https://image.tmdb.org/t/p/w500'
  const ceil = Math.ceil(ratings)
  return (
    <li className="list-cont">
      <div className="each-item">
        <img src={IMAGE_URL + imageUrl} alt={title} className="each-img" />
        <div className="flex-cont">
          <h1 className="title">{title}</h1>
          <div className="ratings">
            <p>{ratings}</p>
          </div>
        </div>
        <Link to={`/movie/${id}`}>
          <button type="button" className="view-btn">
            View Details
          </button>
        </Link>
      </div>
    </li>
  )
}

export default PopularMoviesItem
