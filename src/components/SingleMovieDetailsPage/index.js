import {Component} from 'react'
import Header from '../Header'
import CastListData from '../CastListData'
import './index.css'

const API_KEY = '1b56a199b7895b8429381705d1b0c1fc'
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500'

class SingleMovieDetailsPage extends Component {
  state = {
    movieData: {},
    castList: [],
  }

  componentDidMount() {
    this.getDetailsPage()
    this.getCastDetails()
  }

  getCastDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en`
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data)
    const updatedList = data.cast.map(each => ({
      imgUrl: each.profile_path,
      characterName: each.character,
      originalName: each.original_name,
    }))
    this.setState({castList: updatedList})
    console.log(updatedList)
  }

  getDetailsPage = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`

    const response = await fetch(url)
    const data = await response.json()
    const updatedData = {
      title: data.title,
      imageUrl: data.poster_path,
      ratings: data.vote_average,
      duration: data.runtime,
      releaseDate: data.release_date,
      overView: data.overview,
      backgroundImg: data.backdrop_path,
    }

    this.setState({movieData: updatedData})
    console.log(updatedData)
    console.log(data)
  }

  // renderCastList = () => {
  //   const {castList} = this.state
  //   const {imgUrl, originalName, characterName} = castList

  //   return (

  //   )

  // }

  renderMovieDetails = () => {
    const {movieData, castList} = this.state
    const {
      title,
      imageUrl,
      ratings,
      duration,
      releaseDate,
      overView,
    } = movieData
    const ceil = Math.ceil(ratings)
    return (
      <>
        <div className="details-container">
          <div className="card-container">
            <img src={IMAGE_URL + imageUrl} alt={title} className="img" />
            <div className="elements-cont">
              <h1>{title}</h1>
              <div className="flex-row">
                <p className="date">{releaseDate}</p>
                <p className="duration">{duration} min</p>
                <div className="rate">
                  <p>{ceil}</p>
                </div>
                <span className="span">
                  User <br /> Ratings
                </span>
              </div>
              <p>Overview</p>
              <p>{overView}</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="cast-heading">Top Billed Cast</h1>
          <ul className="cast-container">
            {castList.map(each => (
              <CastListData castDetails={each} />
            ))}
          </ul>
        </div>
      </>
    )
  }

  render() {
    return (
      <>
        <Header />
        <div>{this.renderMovieDetails()}</div>
      </>
    )
  }
}

export default SingleMovieDetailsPage
