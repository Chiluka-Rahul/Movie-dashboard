import {Component} from 'react'
// import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
import MoviesItem from '../MoviesItem'
import Header from '../Header'
import './index.css'

const API_KEY = '1b56a199b7895b8429381705d1b0c1fc'

class UpComingMoviesPage extends Component {
  state = {
    upComingMovies: [],
    activePage: 1,
  }

  componentDidMount() {
    this.getUpComingMovies()
  }

  getUpComingMovies = async () => {
    const {activePage} = this.state
    const upcomingMoviesURL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${activePage}`
    const options = {
      method: 'GET',
    }
    const response = await fetch(upcomingMoviesURL, options)
    const data = await response.json()
    console.log(data)
    const updatedData = data.results.map(eachMovie => ({
      id: eachMovie.id,
      title: eachMovie.title,
      description: eachMovie.overview,
      imageUrl: eachMovie.poster_path,
      ratings: eachMovie.vote_average,
    }))
    this.setState({upComingMovies: updatedData})
    console.log(updatedData)
  }

  decrementPage = () => {
    const {activePage} = this.state
    if (activePage > 1) {
      this.setState(
        prevState => ({
          activePage: prevState.activePage - 1,
        }),
        this.getUpComingMovies,
      )
    }
  }

  incrementPage = () => {
    const {activePage} = this.state
    if (activePage < 100) {
      this.setState(
        prevState => ({
          activePage: prevState.activePage + 1,
        }),
        this.getUpComingMovies,
      )
    }
  }

  render() {
    const {upComingMovies, activePage} = this.state
    return (
      <>
        <Header />
        <div className="popular-movies-container">
          <ul className="popular-movie-list">
            {upComingMovies.map(each => (
              <MoviesItem movieDetails={each} key={each.id} />
            ))}
          </ul>
          <div className="pagination-container">
            <button
              type="button"
              onClick={this.decrementPage}
              className="arrow-btn"
            >
              <p>Prev</p>
            </button>
            <p className="active-pg">{activePage}</p>
            <button
              type="button"
              onClick={this.incrementPage}
              className="arrow-btn"
            >
              <p>Next</p>
            </button>
          </div>
        </div>
      </>
    )
  }
}

export default UpComingMoviesPage
