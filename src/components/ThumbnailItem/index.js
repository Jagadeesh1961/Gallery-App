import './index.css'

const ThumbnailItem = props => {
  const {thumbnail, updateThumbnailId, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = thumbnail

  const updateId = () => {
    updateThumbnailId(id)
  }

  const thumbnailImageClassName = !isActive ? 'active-thumbnail' : ''

  return (
    <li className="list-item">
      <button onClick={updateId} className="button" type="button">
        <img
          className={thumbnailImageClassName}
          src={thumbnailUrl}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
