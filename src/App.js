import {Route, Switch} from 'react-router-dom'

import PopularMoviesPage from './components/PopularMoviesPage'
import TopRatedMoviesPage from './components/TopRatedMoviesPage'
import UpComingMoviesPage from './components/UpComingMoviesPage'
import SingleMovieDetailsPage from './components/SingleMovieDetailsPage'
import SearchedMoviesPage from './components/SearchedMoviesPage'
// import Header from './component/Header'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={PopularMoviesPage} />
    <Route exact path="/top-rated" component={TopRatedMoviesPage} />
    <Route exact path="/upcoming" component={UpComingMoviesPage} />
    <Route exact path="/search" component={SearchedMoviesPage} />
    <Route path="/movie/:id" component={SingleMovieDetailsPage} />
  </Switch>
)

// const App = () => (
//   <div>
//     <PopularMoviesPage />
//   </div>
// )

export default App
