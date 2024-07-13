import {Component} from 'react'
import {Link} from 'react-router-dom'
// import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
// import Loader from 'react-loader-spinner'
import MoviesItem from '../MoviesItem'
import Header from '../Header'
// import SearchedMoviesPage from '../SearchedMoviesPage'
import './index.css'

const API_KEY = '1b56a199b7895b8429381705d1b0c1fc'

class PopularMoviesPage extends Component {
  state = {
    popularMovies: [],
    activePage: 1,
    // isLoading: false,
    // searchMovie: '',
    // searchedMoviesData: [],
  }

  componentDidMount() {
    this.getPopularMovies()
  }

  getPopularMovies = async () => {
    const {activePage} = this.state
    const getPopularMoviesURL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${activePage}`
    const options = {
      method: 'GET',
    }

    const response = await fetch(getPopularMoviesURL, options)
    const data = await response.json()
    console.log(response)
    if (response.ok === true) {
      const updatedData = data.results.map(eachMovie => ({
        id: eachMovie.id,
        title: eachMovie.title,
        description: eachMovie.overview,
        imageUrl: eachMovie.poster_path,
        ratings: eachMovie.vote_average,
      }))
      this.setState({popularMovies: updatedData})
      console.log(updatedData)
    }
    // console.log(data)
  }

  decrementPage = () => {
    const {activePage} = this.state
    if (activePage > 1) {
      this.setState(
        prevState => ({
          activePage: prevState.activePage - 1,
        }),
        this.getPopularMovies,
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
        this.getPopularMovies,
      )
    }
  }

  render() {
    const {popularMovies, activePage} = this.state
    // console.log(searchInput)
    // const searchedMovies = popularMovies.filter(each =>
    //   each.name.includes(searchInput),
    // )
    return (
      <>
        <Header />
        <div className="popular-movies-container">
          <h1>Popular</h1>
          <ul className="popular-movie-list">
            {popularMovies.map(each => (
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

export default PopularMoviesPage
