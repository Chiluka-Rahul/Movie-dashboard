import './index.css'

const CastListData = props => {
  const {castDetails} = props
  const {imgUrl, originalName, characterName} = castDetails
  const IMAGE_URL = 'https://image.tmdb.org/t/p/w500'
  return (
    <li className="cast-list">
      <img src={IMAGE_URL + imgUrl} alt={originalName} className="cast-img" />
      <p className="o-name">{originalName}</p>
      <p className="c-name">{characterName}</p>
    </li>
  )
}

export default CastListData
