import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

// const API_KEY = '1b56a199b7895b8429381705d1b0c1fc'

class Header extends Component {
  // state = {
  //   searchMovie: '',
  //   showSearchBtn: false,
  // }

  // componentDidMount() {
  //   const {match} = this.props
  //   const {path} = match
  //   if (path === '/searched') {
  //     this.setState({showSearchBtn: false})
  //   } else {
  //     this.setState({showSearchBtn: true})
  //   }
  // }

  // onChangeSearchMovie = event => {
  //   console.log(event.target.value)
  // }

  // getSearchedResults = async () => {
  //   const {searchMovie} = this.state
  //   const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchMovie}&page=1`
  //   const respone = await fetch(url)
  //   const data = await respone.json()
  //   const updatedData = data.results.map(eachMovie => ({
  //     id: eachMovie.id,
  //     title: eachMovie.title,
  //     description: eachMovie.overview,
  //     imageUrl: eachMovie.poster_path,
  //     ratings: eachMovie.vote_average,
  //   }))
  //   this.setState({searchedMoviesData: updatedData})
  //   console.log(updatedData)
  //   // console.log(data)
  // }

  // handleSubmit = () => {
  //   const {searchMovie} = this.state
  //   if (searchMovie !== '') {
  //     this.getSearchedResults()
  //   }
  // }

  render() {
    return (
      <nav className="nav-container">
        <div className="responsive">
          <h1>movieDB</h1>
          <form>
            <input
              type="search"
              placeholder="search"
              className="search-container"
            />
            <Link to="/search">
              <button type="button" className="search-btn">
                Search
              </button>
            </Link>
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
    )
  }
}
// const Header = () => (
//   <nav className="nav-container">
//     <div className="responsive">
//       <h1>movieDB</h1>
//       <div>
//         <input
//           type="search"
//           placeholder="search"
//           className="search-container"
//         />
//         <button className="search-btn">Search</button>
//       </div>
//       <div>
//         <ul className="btn-container">
//           <li>
//             <Link to="/">
//               <button className="btn">Popular</button>
//             </Link>
//           </li>
//           <li>
//             <Link to="/top-rated">
//               <button className="btn">Top Rated</button>
//             </Link>
//           </li>
//           <li>
//             <Link to="/upcoming">
//               <button className="btn">Upcoming</button>
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   </nav>
// )
export default Header
