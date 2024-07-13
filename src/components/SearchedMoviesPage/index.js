import {Component} from 'react'
import {Link} from 'react-router-dom'
// import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
// import Header from '../Header'
import MoviesItem from '../MoviesItem'
import './index.css'

const API_KEY = '9506217f2fa9b19d2cbbf7d625191da8'

// const apiStatusConstants = {
//   initial: 'INITIAL',
//   success: 'SUCCESS',
//   failure: 'FAILURE',
//   inProgress: 'IN_PROGRESS',
// }

class SearchedMoviesPage extends Component {
  state = {
    activePage: 1,
    searchMovie: '',
    searchedMoviesData: [],
  }

  // componentDidMount() {
  //   this.getSearchedResults()
  //   this.getPopularMovies()
  // }

  onChangeSearchMovie = event => {
    this.setState({searchMovie: event.target.value})
    // console.log(event.target.value)
  }

  getSearchedResults = async event => {
    event.preventDefault()
    const {searchMovie, activePage} = this.state

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchMovie}&page=${activePage}`
    const respone = await fetch(url)
    const data = await respone.json()
    const updatedData = data.results.map(eachMovie => ({
      id: eachMovie.id,
      title: eachMovie.title,
      description: eachMovie.overview,
      imageUrl: eachMovie.poster_path,
      ratings: eachMovie.vote_average,
    }))
    this.setState({
      searchedMoviesData: updatedData,
      searchMovie: '',
    })
    console.log(updatedData)
  }

  // getPopularMovies = async () => {
  //   const {activePage} = this.state
  //   const limit = 8
  //   const offset = (activePage - 1) * limit
  //   const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&offset=${offset}&limit=${limit}&language=en-US&page=${activePage}`
  //   const options = {
  //     method: 'GET',
  //   }

  //   const response = await fetch(url, options)
  //   const data = await response.json()
  //   // console.log(data)

  //   const updatedData = data.results.map(eachMovie => ({
  //     id: eachMovie.id,
  //     title: eachMovie.title,
  //     description: eachMovie.overview,
  //     imageUrl: eachMovie.poster_path,
  //     ratings: eachMovie.vote_average,
  //   }))
  //   this.setState({popularMovies: updatedData, search: true})
  //   // console.log(updatedData)
  // }

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

  // handleSubmit = event => {
  //   event.preventDefault()
  //   const {searchMovie} = this.state
  //   if (searchMovie) {
  //     return this.getSearchedResults()
  //   } else {
  //     return this.getPopularMovies()
  //   }
  // }

  renderSearched = () => {
    const {searchedMoviesData, searchMovie, activePage} = this.state
    return (
      <>
        <nav className="nav-container">
          <div className="responsive">
            <h1>movieDB</h1>
            <form onSubmit={this.getSearchedResults}>
              <input
                type="search"
                placeholder="search"
                className="search-container"
                onChange={this.onChangeSearchMovie}
                value={searchMovie}
              />
              <button type="button" className="search-btn">
                Search
              </button>
            </form>
            <div>
              <ul className="btn-container">
                <li>
                  <Link to="/">
                    <h1 className="btn">Popular</h1>
                  </Link>
                </li>
                <li>
                  <Link to="/top-rated">
                    <h1 className="btn">Top Rated</h1>
                  </Link>
                </li>
                <li>
                  <Link to="/upcoming">
                    <h1 className="btn">Upcoming</h1>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="popular-movies-container">
          <ul className="popular-movie-list">
            {searchedMoviesData.map(each => (
              <MoviesItem movieDetails={each} />
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

  // renderPopularMovies = () => {
  //   const {searchMovie, popularMovies, activePage} = this.state
  //   return (
  //     <>
  //       <Header />
  //       <div className="popular-movies-container">
  //         <form onSubmit={this.handleSubmit}>
  //           <input
  //             type="search"
  //             placeholder="search"
  //             className="search-container"
  //             onChange={this.onChangeSearchMovie}
  //             value={searchMovie}
  //           />
  //           <button className="search-btn">Search</button>
  //         </form>
  //         <ul className="popular-movie-list">
  //           {popularMovies.map(each => (
  //             <MoviesItem movieDetails={each} />
  //           ))}
  //         </ul>
  //         <div className="pagination-container">
  //           <button
  //             type="button"
  //             onClick={this.decrementPage}
  //             className="arrow-btn"
  //           >
  //             <IoIosArrowBack size={20} />
  //           </button>
  //           <p className="active-pg">{activePage}</p>
  //           <button
  //             type="button"
  //             onClick={this.incrementPage}
  //             className="arrow-btn"
  //           >
  //             <IoIosArrowForward size={20} />
  //           </button>
  //         </div>
  //       </div>
  //     </>
  //   )
  // }

  render() {
    // const {searchedMoviesData, searchMovie} = this.state
    // return (
    //   <>
    //     <Header />
    //     <div className="popular-movies-container">
    //       <form onSubmit={this.handleSubmit}>
    //         <input
    //           type="search"
    //           placeholder="search"
    //           className="search-container"
    //           onChange={this.onChangeSearchMovie}
    //           value={searchMovie}
    //         />
    //         <button className="search-btn">Search</button>
    //       </form>
    //       <ul className="popular-movie-list">
    //         {searchedMoviesData.map(each => (
    //           <MoviesItem movieDetails={each} />
    //         ))}
    //       </ul>
    //     </div>
    //   </>
    // )
    // const {search} = this.state
    return <div>{this.renderSearched()}</div>
  }
}

export default SearchedMoviesPage
