// ThumbnailsList.jsx
import React from 'react'

const ThumbnailsList = ({activeTab, imagesList, onThumbnailClick}) => {
  const filteredThumbnails = imagesList.filter(
    image => image.category === activeTab,
  )

  return (
    <div className="thumbnails-container">
      {filteredThumbnails.map(thumbnail => (
        <button
          key={thumbnail.id}
          type="button"
          className="thumbnail"
          onClick={() => onThumbnailClick(thumbnail.imageUrl)}
        >
          <img src={thumbnail.thumbnailUrl} alt="thumbnail" />
        </button>
      ))}
    </div>
  )
}

export default ThumbnailsList
